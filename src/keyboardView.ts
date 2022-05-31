import Control from './utils/Control'
import Button from './buttonView'
import KeyboardModel from './keyboardModel'
import layout from './keyboard.json'

class Keyboard extends Control {
  private model: KeyboardModel
  constructor(parentNode: HTMLElement | null, model: KeyboardModel) {
    super(parentNode, 'div', 'keyboard')
    this.model = model
    const lang = 'ru'
    this.updateLang(lang)

    layout[lang].map((i) => {
      new Button(this.node, 'div', `button ${i.className}`, i.value)
    })
  }
  updateLang(lang: string): void {
    console.log(lang)
    console.log(layout)
  }
}

export default Keyboard
