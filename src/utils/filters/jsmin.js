module.exports = {
    jsmin: function (code) {
        const UglifyJS = require('uglify-js')
        let minified = UglifyJS.minify(code)
        if (minified.error) {
            console.log('UglifyJS error: ', minified.error)
            return code
        }
        return minified.code
    },
}
