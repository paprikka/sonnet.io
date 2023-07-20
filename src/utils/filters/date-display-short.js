const dateFormatter = require('./date')

module.exports = {
    dateDisplayShort: (val) =>
        Array.isArray(val)
            ? val.map((val) => dateFormatter(val, 'LLLL yyyy')).join(' – ')
            : dateFormatter(val, 'LLLL yyyy'),
}
