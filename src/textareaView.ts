import Control from './utils/Control'

class TextareaView extends Control {
  constructor(parentNode: HTMLElement | null) {
    super(parentNode, 'textarea', 'textarea')
  }
}

export default TextareaView
