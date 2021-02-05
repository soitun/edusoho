import {hiddenUnpublishTask, addLesson} from './../header-util';
import BaseManage from './../BaseManage';
import { TaskListHeaderFixed } from 'app/js/course-manage/help';
import { throttle } from 'lodash';

class DefaultManage extends BaseManage {
  constructor($container) {
    super($container);
    this._defaultEvent();
    this.batchOperate = {
      status: 'none', // editing || none
      permission: [],
      chosenItems: [],
    }
  }

  _defaultEvent() {
    this._showLesson();
    this.calcOperatePanelPosition()
    this.toggleBatchOperate();
    this.singleChooseItem();
    this.batchChooseItem();
  }

  _sortRules($item, container) {
    return true;
  }

  _showLesson() {
    this.$element.find('.js-task-manage-item').first().addClass('active').find('.js-settings-list').stop().slideDown(500);
    this.$element.on('click', '.js-item-content', (event) => {
      let $this = $(event.currentTarget);
      let $li = $this.closest('.js-task-manage-item');
      if ($li.hasClass('active')) {
        $li.removeClass('active').find('.js-settings-list').stop().slideUp(500);
      }
      else {
        $li.addClass('active').find('.js-settings-list').stop().slideDown(500);
        $li.siblings('.js-task-manage-item.active').removeClass('active').find('.js-settings-list').hide();
      }
    });
  }

  afterAddItem($elm) {
    if ($elm.find('.js-item-content').length > 0) {
      $elm.find('.js-item-content').trigger('click');
    }
    $('[data-toggle="popover"]').popover({
      html: true
    });
  }

  calcOperatePanelPosition () {
    const $box = $('.cd-main__body')
    const $header = $('.js-task-list-header')
    const $batchOperate = $('.js-batch-operate-panel')
    const $batchOperateSlot = $(".js-batch-operate-panel__slot")
    const $window = $(window)

    $window.on('resize scroll', throttle(function () {
      const pageYOffset = window.pageYOffset
      const windowHeight = document.documentElement.clientHeight
      const { height: boxHeight } = $box[0].getBoundingClientRect()
      const boxOffsetTop = $box.offset().top
      const boxToWindowBottomDistance = windowHeight + pageYOffset - boxHeight - boxOffsetTop
      console.log(boxToWindowBottomDistance)
      if (boxToWindowBottomDistance <= 0) {
        $batchOperate.addClass('fixed')
        $batchOperateSlot.removeClass('hidden')
      } else {
        $batchOperate.removeClass('fixed')
        $batchOperateSlot.addClass('hidden')
      }
    }, 300))
  }

  toggleBatchOperate () {
    const $switchBtn = $('.js-task-list-header .js-batch-operate-switch')

    $switchBtn.on('click', (event) => {
      this.batchOperate.status = this.batchOperate.status === 'none' ? 'editing' : 'none'
      $switchBtn.toggleClass('hidden')

      if (this.batchOperate.status === 'editing') {
        this.startBatchOperate()
      } else {
        this.endBatchOperate()
      }
    })
  }

  startBatchOperate () {
    this.$element.find('.js-chapter-operation').removeClass('hidden')
    $('.js-batch-operate-panel').removeClass('hidden')
    this.batchOperate.chosenItems = []
  }

  endBatchOperate () {
    this.$element.find('.js-chapter-operation').addClass('hidden').removeClass('checked')
    $('.js-batch-operate-panel').addClass('hidden')
    this.batchOperate.chosenItems = []
  }

  // 单选
  singleChooseItem (event) {
    this.$element.on('click', '.js-chapter-operation', (event) => {
      event.stopPropagation()
      const $target = $(event.target)

      if (!$target.hasClass('js-chapter-operation')) return

      $target.toggleClass('checked')

      const { id, type } = $target.data() // type: chapter、lesson、unit
      const isChecked = $target.hasClass('checked')
      const index = this.batchOperate.chosenItems.findIndex(item => item.id === id)

      if (index > -1 && !isChecked) {
        this.batchOperate.chosenItems.splice(index, 1)
      } else if (index === -1 && isChecked) {
        this.batchOperate.chosenItems.push({ id, type })
      }

      this.updateBatchBtnStatus()
    })
  }

  batchChooseItem (event) {
    const allItemTypes = ['chapter', 'unit', 'lesson']

    this.$element.on('click', '.js-batch-choose', (event) => {
      const $target = $(event.target)
      const types = $target.data('types').split(',')
      const leftTypes = allItemTypes.filter(type => types.indexOf(type) === -1)

      types.forEach(type => {
        this.$element
          .find(`.js-chapter-operation[data-type=${type}]`)
          .toggleClass('checked')
          .trigger('click')
      })
      $target.toggleClass('active')

      leftTypes.forEach(type => {
        this.$element
          .find(`.js-chapter-operation[data-type=${type}]`)
          .removeClass('checked')
          .trigger('click')
      })

      this.$element.find(`.js-batch-choose[data-types="${leftTypes.join(',')}"]`).removeClass('active')
      this.updateBatchBtnStatus()
    })
  }

  // 批量删除
  batchDelete () {
    const { status, permission } = this.batchOperate

    if (status === 'none' || permission.indexOf('delete') === -1) return
  }

  // 批量发布
  batchPublish () {
    const { status, permission } = this.batchOperate

    if (status === 'none' || permission.indexOf('publish') === -1) return
  }

  // 批量取消发布
  batchCancelPublish () {
    const { status, permission } = this.batchOperate

    if (status === 'none' || permission.indexOf('calcelPublish') === -1) return
  }

  // 更新按钮状态
  updateBatchBtnStatus () {
    // type: chapter、lesson、unit
    const $chosenNumber = this.$element.find('.js-chosen-number')
    const chosenItems = this.batchOperate.chosenItems
    const hasChapter = chosenItems.findIndex(({type}) => type === 'chapter') > -1
    const hasLesson = chosenItems.findIndex(({type}) => type === 'lesson') > -1
    const hasUnit = chosenItems.findIndex(({type}) => type === 'unit') > -1
    const $batchPublishBtn = this.$element.find('.js-batch-publish')
    const $batchCancelPublishBtn = this.$element.find('.js-batch-cancel-publish')
    const $batchDeleteBtn = this.$element.find('.js-batch-delete')
    const defaultDisabled = !(hasChapter || hasLesson || hasUnit)

    $chosenNumber.text(chosenItems.length)
    // 删除 -- 章和课时、节和课时、章节和课时
    // 发布 -- 只有课时
    // 取消发布 -- 只有课时
    $batchPublishBtn.attr('disabled', defaultDisabled)
    $batchCancelPublishBtn.attr('disabled', defaultDisabled)
    $batchDeleteBtn.attr('disabled', defaultDisabled)
    this.batchOperate.permission = defaultDisabled ? [] : ['publish', 'cancelPublish', 'delete']

    if (hasLesson && (hasChapter || hasUnit)) {
      $batchPublishBtn.attr('disabled', true)
      $batchCancelPublishBtn.attr('disabled', true)
      $batchDeleteBtn.attr('disabled', true)
      this.batchOperate.permission = []
    }

    if (!hasLesson && (hasChapter || hasUnit)) {
      this.batchOperate.permission = ['delete']
      $batchPublishBtn.attr('disabled', true)
      $batchCancelPublishBtn.attr('disabled', true)
    }
  }
}

new DefaultManage('.js-lesson-manage');
hiddenUnpublishTask();
addLesson();
TaskListHeaderFixed();
