import watch from './inputeventwatcher'
import Timr from 'timrjs'
import Field from './field'
import Indext from './indext'
import * as keycoder from 'keycoder'
require('../styles/classicgamestyle.css')
require('../font-awesome/css/font-awesome.min.css')

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
    
    this.text = this.createText(text)
    this.errorField = new Field(this.error)
    this.buildParent() 
    return this.parent
  }
  buildParent () {
    while (this.parent.firstChild) {
      this.parent.removeChild(this.parent.firstChild)
    }
    this.text = this.createText(this.message)
    this.parent.appendChild(this.status)
    this.parent.appendChild(this.error)
    this.parent.appendChild(this.time)
    this.parent.appendChild(this.text)
      
  }
  createText (message) {
    let text = document.createElement('p')
    text.id = 'classic-text'
    text.className = 'fine white-border'
    this.typed = document.createElement('span')
    this.typed.id = 'classic-typed'
    this.untyped = document.createElement('span')
    this.untyped.id = 'classic-untyped'
    this.untyped.setAttribute('tabindex', '0')
    this.untyped.textContent = message
    this.index = new Indext(this.typed, this.untyped, message)
    text.appendChild(this.typed)
    text.appendChild(this.untyped)
    return text
  }
  preStart (text) {
    // Make timer update clock element every second
    var ticker = this.timer.ticker((formattedTime, percentDone) => {
      this.clock = percentDone
      this.time.textContent = formattedTime
    })
    this.index.reset(text)
    this.untyped.textContent = text
    this.time.textContent = '00:00'
    this.error.textContent = ''
    this.status.textContent = 'Get ready to type'
    this.status.textContent = 'Type! If you make an error, backspace'
    this.timer.start()
    this.untyped.setAttribute('tabindex', '0')
    // Set a flashing indicator to start typing
    this.setFlash(true)
  }
  setFlash (bool) {
    if (bool) {
      this.backgroundInterval = setInterval(() => {
        this.text.classList.toggle('blue')
      }, 400)
    } else {
      clearInterval(this.backgroundInterval)
      this.text.classList.remove('blue')
    }
  }
  stop () {
    this.timer.stop()
    // By removing the 'tabindex' property, the untyped element can not have typing focus
    if (this.untyped.hasAttribute('tabindex')) {
      this.untyped.removeAttribute('tabindex')
    }
  }
  addListeners (text, onEnd) {
    this.preStart(text) 
    // Focus the text element 
    this.untyped.focus()

    watch(this.untyped, (e) => {
      // Clear the flashing background once typing starts
      this.setFlash(false)
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
          onEnd(this.timer.percentDone)
          return
        }
      } else {
        this.text.classList.add('error')
        if (char === ' ') {
          char = '·'
        }
        this.errorField.addChar(char)
        console.log('incorrect')
      }

    }, (e) => {
      this.deleteLetter()
    })
  }
  deleteLetter () {
    // Delete char from error only if it has letters in it
    if (!this.errorField.empty()) {
      this.errorField.removeChar()
      if (this.errorField.empty()) {
        this.text.classList.remove('error')
        this.text.classList.add('fine')
      }
    }
  }
  rerun (text, onEnd) {
    this.buildParent()
    this.stop()
    this.timer = new Timr(0)
  }
}
