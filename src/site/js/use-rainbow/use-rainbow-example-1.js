import { makeScrollPreview } from './scroll-preview.js'

const template = `
  <div class="scroll-preview__grid-wrapper">
    <div class="scroll-preview__main">
      <div class="scroll-preview__browser">
        <div class="scroll-preview__content-wrapper">
          <div class="scroll-preview__content"></div>
        </div>
        <div class="scroll-preview__window">
          <div class="scroll-preview__above"></div>
          <div class="scroll-preview__frame"></div>
          <div class="scroll-preview__below"></div>
        </div>
      </div>
      <div class="scroll-preview__spacer"></div>
        <div class="scroll-preview__canvas">
            <div class="scroll-preview-colours__ring">
                <span
                class="
                scroll-preview-colours__ring-layer
                scroll-preview-colours__ring-layer--first
                "
                ></span>
                <span
                class="
                scroll-preview-colours__ring-layer
                scroll-preview-colours__ring-layer--second
                "
                ></span>
                <div class="scroll-preview-colours__swatch"></div>
            </div>
        </div>      
    </div>
    <div class="scroll-preview__controls">
      <div class="canvas-example__controls">
          <label>
            <span class="canvas-example__label-text">Scroll position</span>
            <input class="scroll-preview__scroll-input" type="range" min="0" max="1080" />
          </label>
      </div>    
    </div>
  </div>
`

const container = document.querySelector('.canvas-example--scroll-preview')

container.innerHTML = template
const scrollPositionSlider = container.querySelector(
    '.scroll-preview__scroll-input'
)

const browserScrollContainer = container.querySelector(
    '.scroll-preview__content'
)

scrollPositionSlider.oninput = console.log
