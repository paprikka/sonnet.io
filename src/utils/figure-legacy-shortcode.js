module.exports = {
    legacyFigureShortcode: (content, src, alt) => {
        return `
        <figure class='post__figure'>
            <img src='${src}' alt='${alt}' loading='lazy'>
            <figcaption>${content}</figcaption>
        </figure>
        `.trim()
    },
}
