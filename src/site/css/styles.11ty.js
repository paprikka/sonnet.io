const fs = require('fs')
const path = require('path')
const postcss = require('postcss')

// the file name as an entry point for postcss compilation
// also used to define the output filename in our output /css folder.
const fileName = 'styles.css'

const transform = postcss([
    require('postcss-import'),
    require('precss'), // seems like putting it at the beginning of arg list triggers a bunch of false negatives coming from postcss...
    require('postcss-mixins'),
    require('postcss-color-mix'),
    require('postcss-simple-vars'),
    require('cssnano'),
])

module.exports = class {
    async data() {
        const rawFilepath = path.join(
            __dirname,
            `../_includes/postcss/${fileName}`
        )
        return {
            permalink: `css/${fileName}`,
            rawFilepath,
            rawCss: fs.readFileSync(rawFilepath),
        }
    }

    async render({ rawCss, rawFilepath }) {
        return await transform
            .process(rawCss, { from: rawFilepath })
            .then((result) => result.css)
    }
}
