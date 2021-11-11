module.exports = (content) => {
    const maxLength = 200
    const strip = require('striptags')
    const strippedTags = strip(content)
    const strippedText = Array.isArray(strippedTags)
        ? strippedTags.join(' ')
        : strippedTags

    const shortText =
        strippedText.length > maxLength
            ? strippedText.slice(0, maxLength - 6) + ' [...]'
            : strippedText
    console.log(shortText)
    return shortText
}
