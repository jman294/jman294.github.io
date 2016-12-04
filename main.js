require('./styles/keyappstyle.css')

import watch from './modules/inputeventwatcher'
import ClassicGame from './modules/classicgame'

var text = 'I am some new text'
var asdf = new ClassicGame()
var classicParent = asdf.create(text)
var content = document.querySelector('#classic-wrapper')
content.appendChild(classicParent)
classicParent = document.querySelector('#classic-app')
var button = document.querySelector('#classic-button')

button.addEventListener('click', () => {
  startClassic()
  console.log('click')
})
const startClassic = () => {
  document.querySelector('#classic-wrapper').removeChild(classicParent)
  classicParent = asdf.create(text)
  console.log(classicParent)
  document.querySelector('#classic-wrapper').appendChild(classicParent)

  asdf.run(text, () => {
    console.log('done')
  })
}
