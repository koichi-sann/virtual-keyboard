import Control from './utils/Control'
import Keyboard from './keyboardView'
import KeyboardModel from './keyboardModel'
import TextareaView from './textareaView'

class Application extends Control {
  private textarea: Control<HTMLElement>
  private keyboard: Control<HTMLElement>
  private info: Control<HTMLElement>
  private infoContent: string

  constructor(parentNode: HTMLElement | null) {
    super(parentNode, 'div', 'root')
    const model = new KeyboardModel()
    this.infoContent =
      'Клавиатyра создана при помощи typescript в операционной системе ArchLinux. Для смены языка используйте комбинацию: (LeftCtrl+Shift)'
    this.textarea = new TextareaView(this.node)
    this.keyboard = new Keyboard(this.node, model)
    this.info = new Control(this.node, 'div', 'info', this.infoContent)
  }
}

export default Application
