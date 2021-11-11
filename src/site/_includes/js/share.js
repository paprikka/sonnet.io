const init = () => {
    const shareLegacy = (url) => {
        if (!window.ClipboardItem)
            return Promise.reject(new Error('Clipboard access not supported'))
        const text = url
        const type = 'text/plain'
        const blob = new Blob([text], { type })
        const data = [new ClipboardItem({ [type]: blob })]

        return navigator.clipboard.write(data)
    }

    const buttons = document.querySelectorAll('.share-page-button')
    if (!buttons.length) return

    ;[...buttons].forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.innerText = 'copied'
            shareLegacy(btn.getAttribute('data-share-url'))
        })
    })
}

if (document.readyState === 'complete') {
    init()
} else {
    document.addEventListener('DOMContentLoaded', init)
}
