let markdown = require('markdown-it')({
    linkify: true,
})

module.exports = {
    block(rawString) {
        return markdown.render(rawString)
    },
    inline(rawString) {
        return markdown.renderInline(rawString)
    },
}
