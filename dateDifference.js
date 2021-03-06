var dates = require('./.internal/dates');

/**
 * Difference between dates which are passed, in formats 'milliseconds', 'days', 'hours', 'minutes'
 *
 * @customNeeds -
 *
 * @since 2.0.0
 * @category Date
 *
 * @param {Date} date1 - The Date for compare
 * @param {Date} date2 - The Date for compare
 * @param {String} differenceType - [ 'days', 'hours', 'minutes', 'milliseconds', 'all' ]
 *
 * @returns {Number|Object} Returns the numeric value or object depends on passed differenceType param
 *
 * @example
 *
 * famulus.dateDifference(new Date('06-20-2018'), new Date('06-26-2018'), 'days')
 * // => 6
 *
 * famulus.dateDifference(new Date('06-20-2018'), new Date('06-26-2018'), 'hours')
 * // => 144
 *
 * famulus.dateDifference(new Date('06-20-2018'), new Date('06-26-2018'), 'minutes')
 * // => 8640
 *
 * famulus.dateDifference(new Date('06-26-2018'), new Date('06-20-2018'), 'milliseconds')
 * // => 518400000
 *
 * famulus.dateDifference(new Date('06-26-2018 10:10'), new Date('06-20-2018 08:00'), 'all')
 * // => {days: 6, hours: 2, minutes: 10, milliseconds: 526200000}
 */
function dateDifference(date1, date2, differenceType) {
    var diffMilliseconds = Math.abs(date1 - date2);

    switch(differenceType) {
        case 'days':
            return dates._getDaysDiff(diffMilliseconds);
        case 'hours':
            return dates._differenceInHours(diffMilliseconds);
        case 'minutes':
            return dates._differenceInMinutes(diffMilliseconds);
        case 'milliseconds':
            return diffMilliseconds;

        default:
            return {
                days: dates._getDaysDiff(diffMilliseconds),
                hours: dates._getHoursDiff(diffMilliseconds),
                minutes: dates._getMinutesDiff(diffMilliseconds),
                milliseconds: diffMilliseconds
            }
    }
}

module.exports = dateDifference;
