import { makeRGBPicker } from './rgb-picker.js'
import { makeHSLPicker } from './hsl-picker.js'

const container = document.querySelector('.canvas-example--rgb-hsl')

container.innerHTML = `
    <div class='rgb-picker-0'></div>
    <div class='hsl-picker-0'>HSL</div>
`

makeRGBPicker(document.querySelector('.rgb-picker-0'))
makeHSLPicker(document.querySelector('.hsl-picker-0'))
