const { imageShortcode } = require('./image-shortcode')
module.exports = {
    async renderFig(content, src, alt) {
        const imgHTML = await imageShortcode.bind(this)(src, alt)
        return `
        <figure class='post__figure'>
            ${imgHTML}
            <figcaption>${content}</figcaption>
        </figure>
        `.trim()
    },
}
