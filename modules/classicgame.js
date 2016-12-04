import watch from './inputeventwatcher'
import Timr from 'timrjs'
import Field from './field'
import Indext from './indext'
import * as keycoder from 'keycoder'
require('../styles/classicgamestyle.css')

export default class {
  constructor () {
    this.clock = 0
    this.timer = new Timr(0)
  }
  create (text) {
    this.parent = document.createElement('div')
    this.parent.id = 'classic-app'
    this.parent.className = 'border'
    this.timer.stop()
    this.status = document.createElement('p')
    this.status.id = 'classic-status'
    this.status.className = 'border'
    this.status.textContent = 'Ready?'
    this.error = document.createElement('p')
    this.error.id = 'classic-error'
    this.error.className = 'error white-border'
    this.time = document.createElement('p')
    this.time.id = 'classic-time'
    this.time.className = 'white-border'
    this.time.textContent = '00:00'
    this.text = document.createElement('p')
    this.text.id = 'classic-text'
    this.text.className = 'fine white-border'

    this.createText(text)
    this.index = new Indext(this.typed, this.untyped, this.message)
    this.errorField = new Field(this.error)
    this.parent.appendChild(this.status)
    this.parent.appendChild(this.error)
    this.parent.appendChild(this.time)
    this.parent.appendChild(this.text)
    
    return this.parent
  }
  createText (text) {
    while (this.text.firstChild) {
      this.text.removeChild(this.text.firstChild)
    }
    this.typed = document.createElement('span')
    this.typed.id = 'classic-typed'
    this.untyped = document.createElement('span')
    this.untyped.id = 'classic-untyped'
    this.untyped.setAttribute('tabindex', '0')
    this.untyped.textContent = text
    this.text.appendChild(this.typed)
    this.text.appendChild(this.untyped)

  }
  run (text, onEnd) {
    this.index.reset(text)
    this.untyped.textContent = text
    this.time.textContent = '00:00'
    this.error.textContent = ''
    this.status.textContent = 'Get ready to type'

    var ticker = this.timer.ticker((formattedTime, percentDone) => {
      this.clock = percentDone
      this.time.textContent = formattedTime
    })
    this.status.textContent = 'Type! If you make an error, backspace'
    this.status.className = this.status.className + ' go'
    this.timer.start()
      
    this.untyped.focus()
    watch(this.untyped, (e) => {
      
      let char = keycoder.eventToCharacter(e)
      console.log(char)
      if (char === this.index.currentChar() && this.errorField.empty()) {
        console.log('correct')
        this.index.increase()
        // If we have reached the end
        if (this.index.index === text.length) {
          this.timer.stop()
          this.status.textContent = 'Done!'
          console.log('end')
          onEnd()
          return
        }
      } else {
        this.text.className = 'white-border error'
        this.errorField.addChar(char)
        console.log('incorrect')
      }

    }, (e) => {
      // Delete char from error only if it has letters in it
      if (!this.errorField.empty()) {
        this.errorField.removeChar()
        if (this.errorField.empty()) {
          this.text.className = 'white-border fine'
        }
      }
    })

    return
  }
}
