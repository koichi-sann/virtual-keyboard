import Control from './utils/Control'
import Button from './buttonView'
import layout from './keyboard.json'

class Keyboard extends Control {
  constructor(parentNode: HTMLElement | null) {
    super(parentNode, 'div', 'keyboard')

    layout.en.map((i) => {
      const button = new Button(this.node, 'div', i.className, i.value)
    })
  }
}

export default Keyboard
