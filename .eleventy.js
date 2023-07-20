const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const footnotes = require('eleventy-plugin-footnotes')
const pluginWebC = require('@11ty/eleventy-plugin-webc')
const { imageShortcode } = require('./src/utils/image-shortcode.js')

module.exports = function (config) {
    // Layout aliases can make templates more portable
    config.addLayoutAlias('default', '_layouts/base.njk')
    config.addPlugin(footnotes, { baseClass: 'footnotes' })
    config.addPlugin(pluginWebC, {
        components: [
            'src/site/_includes/components/**/*.webc',
            'npm:@11ty/eleventy-img/*.webc',
        ],
    })

    config.addFilter('md', require('./src/utils/filters/md').inline)
    config.addFilter('mdblock', require('./src/utils/filters/md').block)
    config.addFilter('squash', require('./src/utils/filters/squash'))
    config.addFilter('json', require('./src/utils/filters/json').json)
    config.addFilter('dateDisplay', require('./src/utils/filters/date'))
    config.addFilter(
        'dateDisplayShort',
        require('./src/utils/filters/date-display-short').dateDisplayShort
    )

    // add support for syntax highlighting
    config.addPlugin(syntaxHighlight)

    // minify the html output
    config.addTransform('htmlmin', require('./src/utils/minify-html.js'))

    // compress and combine js files
    config.addFilter('jsmin', require('./src/utils/filters/jsmin.js').jsmin)

    // pass some assets right through
    config.addPassthroughCopy('./src/site/images')
    config.addPassthroughCopy('./src/site/js')

    config.addPlugin(pluginRss)

    // TODO: merge into one shortcode after publishing the post
    config.addPairedAsyncShortcode(
        'fig',
        require('./src/utils/figure-shortcode').renderFig
    )

    config.addPairedShortcode(
        'figure',
        require('./src/utils/figure-legacy-shortcode').legacyFigureShortcode
    )

    config.addShortcode(
        'picture',
        require('./src/utils/picture-legacy-shortcode.js')
            .pictureLegacyShortcode
    )

    config.addAsyncShortcode('pic', imageShortcode)

    // make the seed target act like prod
    return {
        dir: {
            input: 'src/site',
            output: 'dist',
        },
        templateFormats: ['njk', 'md', '11ty.js'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        passthroughFileCopy: true,
    }
}
