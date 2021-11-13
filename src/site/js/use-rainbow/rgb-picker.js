const state = {
    red: 0,
    green: 0,
    blue: 0,
}

const template = `
<div class='rgb-picker'>
    <div class='rgb-picker__canvas'>
        <svg width="185" height="176" viewBox="0 0 185 176" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="57.5" fill="black" stroke="black" stroke-width="5"/>
            <circle cx="125" cy="60" r="57.5" fill="black" stroke="black" stroke-width="5"/>
            <circle cx="93" cy="116" r="57.5" fill="black" stroke="black" stroke-width="5"/>
            <g style="mix-blend-mode:lighten">
                <circle class='render-red' cx="60" cy="60" r="55" fill="#FF0000"/>
            </g>
            <g style="mix-blend-mode:lighten">
                <circle class='render-green' cx="125" cy="60" r="55" fill="#00FF00"/>
            </g>
            <g style="mix-blend-mode:lighten">
                <circle class='render-blue' cx="93" cy="116" r="55" fill="#0000FF"/>
            </g>
        </svg>
    </div>
    <form class='rgb-picker__controls'>
        <label>
            <span class='rgb-picker__label-text'>Red</span>
            <input name='red' type="range" min=0 max=255 value=255></input>
        </label>
        <label>
            <span class='rgb-picker__label-text'>Green</span>
            <input name='green' type="range" min=0 max=255 value=255></input>
        </label>
        <label>
            <span class='rgb-picker__label-text'>Blue</span>
            <input name='blue' type="range" min=0 max=255 value=255></input>
        </label>
    </form>
</div>
`

export const makeRGBPicker = (parent) => {
    parent.innerHTML = template

    const [redLabel, greenLabel, blueLabel] = parent.querySelectorAll(
        '.rgb-picker__label-text'
    )

    const render = () => {
        // using the closure scope so I can get nicer autocomplete in plain JS

        parent
            .querySelector('.render-red')
            .setAttribute('fill', `rgb(${state.red}, 0, 0)`)
        parent
            .querySelector('.render-green')
            .setAttribute('fill', `rgb(0, ${state.green}, 0)`)
        parent
            .querySelector('.render-blue')
            .setAttribute('fill', `rgb(0, 0, ${state.blue})`)

        redLabel.innerText = `Red (${state.red})`
        greenLabel.innerText = `Green (${state.green})`
        blueLabel.innerText = `Blue (${state.blue})`
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

    mapSliderToState('red', 'input[name=red]')
    mapSliderToState('green', 'input[name=green]')
    mapSliderToState('blue', 'input[name=blue]')
}
