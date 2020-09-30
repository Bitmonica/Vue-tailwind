import Vue, { CreateElement, VNode } from 'vue';
import { HideReason } from '../../types/Dialog';
import TDialogOverlayWrapperTransition from './TDialogOverlayWrapperTransition';

const TDialogOverlayWrapper = Vue.extend({
  name: 'TDialogOverlayWrapper',

  props: {
    getElementCssClass: {
      type: Function,
      required: true,
    },
    dialogShow: {
      type: Boolean,
      required: true,
    },
    titleTag: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: undefined,
    },
    htmlTitle: {
      type: String,
      default: undefined,
    },
    icon: {
      type: String,
      default: undefined,
    },
    htmlIcon: {
      type: String,
      default: undefined,
    },
    textTag: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: undefined,
    },
    htmlText: {
      type: String,
      default: undefined,
    },
    cancelButtonText: {
      type: String,
      required: true,
    },
    cancelButtonAriaLabel: {
      type: String,
      default: undefined,
    },
    okButtonText: {
      type: String,
      required: true,
    },
    okButtonAriaLabel: {
      type: String,
      default: undefined,
    },
    showCloseButton: {
      type: Boolean,
      required: true,
    },
    closeButtonHtml: {
      type: String,
      required: true,
    },
    inputAttributes: {
      type: Object,
      default: undefined,
    },
    type: {
      type: String,
      required: true,
    },
  },

  render(createElement: CreateElement): VNode {
    return createElement(
      'div',
      {
        ref: 'wrapper',
        class: this.getElementCssClass('wrapper'),
      },
      [
        createElement(
          TDialogOverlayWrapperTransition,
          {
            props: {
              type: this.type,
              dialogShow: this.dialogShow,
              getElementCssClass: this.getElementCssClass,
              titleTag: this.titleTag,
              title: this.title,
              htmlTitle: this.htmlTitle,
              icon: this.icon,
              htmlIcon: this.htmlIcon,
              textTag: this.textTag,
              text: this.text,
              htmlText: this.htmlText,
              cancelButtonText: this.cancelButtonText,
              cancelButtonAriaLabel: this.cancelButtonAriaLabel,
              okButtonText: this.okButtonText,
              okButtonAriaLabel: this.okButtonAriaLabel,
              showCloseButton: this.showCloseButton,
              closeButtonHtml: this.closeButtonHtml,
              inputAttributes: this.inputAttributes,
            },
            on: {
              dismiss: (e: MouseEvent, reason: HideReason) => this.$emit('dismiss', e, reason),
              cancel: (e: MouseEvent, reason: HideReason) => this.$emit('cancel', e, reason),
              submit: (e: MouseEvent, reason: HideReason) => this.$emit('submit', e, reason),
              input: (e: InputEvent) => this.$emit('input', e),
            },
          },
        ),
      ],
    );
  },
});

export default TDialogOverlayWrapper;
