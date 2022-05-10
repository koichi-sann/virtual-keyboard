import Control from './utils/Control'

class Button extends Control {
  constructor(
    parentNode: HTMLElement | null,
    tagName: string,
    className: string,
    textContent: string
  ) {
    super(parentNode, tagName, className, textContent)

  this.node.onclick = () => {
    console.log(textContent)
  }
  }
}

export default Button
