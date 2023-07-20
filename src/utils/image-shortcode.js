const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const footnotes = require('eleventy-plugin-footnotes')

const Image = require('@11ty/eleventy-img')

const path = require('path')
const getResolvedSrc = (src, page) => {
    const isRemote = !src.startsWith('.')
    if (isRemote) return src

    const isColocated = !isRemote && !src.startsWith('./src')
    if (!isColocated) return src

    return path.resolve(page.inputPath, '../', src)
}

async function imageShortcode(
    src,
    alt,
    sizes = '(min-width: 1200px) 60rem, 100vw'
) {
    const isAnimated = src.endsWith('.gif')
    const sharedOpts = {
        widths: [600, 1200],
        outputDir: './dist/images/opt',
        urlPath: '/images/opt',
    }

    const options = isAnimated
        ? {
              ...sharedOpts,
              formats: ['webp', 'gif'],
              sharpOptions: {
                  animated: true,
              },
          }
        : {
              ...sharedOpts,
              formats: ['avif', 'webp', 'jpeg'],
          }
    const metadata = await Image(getResolvedSrc(src, this.page), options)

    const imageAttributes = {
        alt,
        sizes,
        loading: 'lazy',
        decoding: 'async',
    }

    const meta = Image.generateHTML(metadata, imageAttributes)

    // TODO: remove me
    // ? temporary hack before pushing to HN
    if (src === './src/site/posts/sit/imgs/hero.gif') {
        console.log('=== there can be only one ===')
        return meta.replace('height="2400"', 'height="600" data-yolo="true"')
    }
    return meta
}

module.exports = { imageShortcode }
