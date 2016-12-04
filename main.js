require('./styles/keyappstyle.css')

import Timr from 'timrjs'
import watch from './modules/inputeventwatcher'
import ClassicGame from './modules/classicgame'

let timer = new Timr('4')
let text = 'I am some new text'
let asdf = new ClassicGame()
let classicParent = asdf.create(text)
let content = document.querySelector('#classic-wrapper')
content.appendChild(classicParent)
classicParent = document.querySelector('#classic-app')
let button = document.querySelector('#classic-button')

button.addEventListener('click', () => {
  startClassic()
  console.log('click')
})
let status = document.querySelector('#classic-status')
status.textContent = 'To play: Type the text in the green box, backspacing if you make an error'
const startClassic = () => {
	timer.stop()
timer = new Timr('4')
  status = document.querySelector('#classic-status')
  status.textContent = 'Get ready to type!'

  timer.start()
  let poop = timer.ticker((formattedTime, percentDone, currentTime)=>{
    status.textContent=currentTime
  })
  timer.finish((self)=>{
    content.removeChild(classicParent)
    classicParent = asdf.create(text)
    console.log(classicParent)
    content.appendChild(classicParent)

    asdf.run(text, () => {
      console.log('done')
    })
  })
}
