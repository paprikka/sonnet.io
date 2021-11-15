const state = {
    hue: 0,
    saturation: 0,
    lightness: 0,
}

const template = `
<div class='hsl-picker'>
    <div class='hsl-picker__canvas'>
        <div class='hsl-picker__ring'>
            <span class='hsl-picker__ring-layer hsl-picker__ring-layer--first'></span>
            <span class='hsl-picker__ring-layer hsl-picker__ring-layer--second'></span>

            <div class='hsl-picker__swatch'></div>
        </div>

    </div>
    <form class='canvas-example__controls'>
        <label>
            <span class='hsl-picker__label-text'>Hue</span>
            <input name='hue' type="range" min=0 max=360 value=0></input>
        </label>
        <label>
            <span class='hsl-picker__label-text'>Saturation</span>
            <input name='saturation' type="range" min=0 max=100 value=100></input>
        </label>
        <label>
            <span class='hsl-picker__label-text'>Lightness</span>
            <input name='lightness' type="range" min=0 max=100 value=50></input>
        </label>
    </form>
</div>
`

export const makeHSLPicker = (parent) => {
    parent.innerHTML = template

    const [hueLabel, saturationLabel, lightnessLabel] = parent.querySelectorAll(
        '.hsl-picker__label-text'
    )

    const render = () => {
        // yes, this could be a single function
        // and yes, this would make the code much more hard to read
        // an yeesss, I did rewrite it and then decided to revert and use
        // the stupid simple way:)
        const firstRingFill = `conic-gradient(
            from 30deg,
            hsl(0deg, ${state.saturation}%, ${state.lightness}%),
            hsl(60deg, ${state.saturation}%, ${state.lightness}%) 30deg,
            hsl(120deg, ${state.saturation}%, ${state.lightness}%) 90deg,
            hsl(180deg, ${state.saturation}%, ${state.lightness}%) 150deg,
            hsl(240deg, ${state.saturation}%, ${state.lightness}%) 210deg,
            hsl(300deg, ${state.saturation}%, ${state.lightness}%) 270deg,
            hsl(360deg, ${state.saturation}%, ${state.lightness}%) 330deg,
            hsl(0deg, ${state.saturation}%, ${state.lightness}%)
        )`

        parent.querySelector(
            '.hsl-picker__ring-layer:nth-child(1)'
        ).style.background = firstRingFill

        const rect = parent
            .querySelector('.hsl-picker__ring')
            .getBoundingClientRect()

        const offsetX = rect.width / 2
        const offsetY = rect.width / 2
        const r = (rect.width / 2) * 0.85
        const radian = Math.PI / 180

        const x = Math.sin(radian * (360 - state.hue)) * -r + offsetX
        const y = Math.cos(radian * (360 - state.hue)) * -r + offsetY

        parent.querySelector('.hsl-picker__swatch').style.left = `${x}px`
        parent.querySelector('.hsl-picker__swatch').style.top = `${y}px`
        parent.querySelector(
            '.hsl-picker__swatch'
        ).style.backgroundColor = `hsl(${state.hue}deg, ${state.saturation}%, ${state.lightness}%)`

        hueLabel.innerText = `Hue (${state.hue})`
        saturationLabel.innerText = `Saturation (${state.saturation})`
        lightnessLabel.innerText = `Lightness (${state.lightness})`
    }

    const setState = (delta) => {
        Object.assign(state, delta)
        render()
    }

    const mapSliderToState = (name, sliderSelector) => {
        const el = parent.querySelector(sliderSelector)
        setState({
            [name]: el.value,
        })
        el.oninput = (e) =>
            setState({
                [name]: e.currentTarget.value,
            })
    }

    mapSliderToState('hue', 'input[name=hue]')
    mapSliderToState('saturation', 'input[name=saturation]')
    mapSliderToState('lightness', 'input[name=lightness]')
}
