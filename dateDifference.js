var MILLISECONDS_IN_DAY = 86400000;
var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;

var HOURS_IN_DAY = 24;
var MINUTES_IN_DAY = 1440;
var MINUTES_IN_HOUR = 60;

/**
 * Difference between now and date which is passed, in formats 'milliseconds', 'days', 'hours', 'minutes'
 *
 * @customNeeds -
 *
 * @since 1.2.0
 * @category Date
 *
 * @param {Date} date - The Date to inspect
 * @param {String} differenceType - [ 'days', 'hours', 'minutes', 'milliseconds', 'all' ]
 *
 * @returns {Number|Object} Returns the numeric value or object depends on passed differenceType param
 *
 * @example
 * example result for now is new Date('12-26-2017')
 *
 * famulus.dateDifference(new Date('12-20-2017'), 'milliseconds')
 * // => 555261242
 *
 * famulus.dateDifference(new Date('12-20-2017'), 'days')
 * // => 6
 *
 * famulus.dateDifference(new Date('12-20-2017'), 'hours')
 * // => 156
 */
function dateDifference(date, differenceType) {
    var now = new Date(),
        diffMilliseconds = Math.abs(date - now);

    switch(differenceType) {
        case 'days':
            return _getDaysDiff(diffMilliseconds);
        case 'hours':
            return _differenceInHours(diffMilliseconds);
        case 'minutes':
            return _differenceInMinutes(diffMilliseconds);
        case 'milliseconds':
            return diffMilliseconds;

        default:
            return {
                days: _getDaysDiff(diffMilliseconds),
                hours: _getHoursDiff(diffMilliseconds),
                minutes: _getMinutesDiff(diffMilliseconds),
                milliseconds: diffMilliseconds
            }
    }
}

/**
 * @param {Number} milliseconds
 * @return {Number}
 * @private
 */
function _getDaysDiff(milliseconds) {
    return Math.abs(Math.floor(milliseconds / MILLISECONDS_IN_DAY));
}

/**
 * @param {Number} milliseconds
 * @return {Number}
 * @private
 */
function _getHoursDiff(milliseconds) {
    return Math.abs(Math.floor((milliseconds % MILLISECONDS_IN_DAY) / MILLISECONDS_IN_HOUR));
}

/**
 * @param {Number} milliseconds
 * @return {Number}
 * @private
 */
function _getMinutesDiff(milliseconds) {
    return Math.abs(Math.round(((milliseconds % MILLISECONDS_IN_DAY) % MILLISECONDS_IN_HOUR) / MILLISECONDS_IN_MINUTE));
}

/**
 * @param {Number} milliseconds
 * @return {Number}
 * @private
 */
function _differenceInHours(milliseconds) {
    var days = _getDaysDiff(milliseconds);

    if (days !== 0) {
        return _getHoursDiff(milliseconds) + (days * HOURS_IN_DAY);
    }

    return _getHoursDiff(milliseconds);
}

/**
 * @param {Number} milliseconds
 * @return {Number}
 * @private
 */
function _differenceInMinutes(milliseconds) {
    var days = _getDaysDiff(milliseconds),
        hours = _getHoursDiff(milliseconds);

    if (days !== 0) {
        days = days * MINUTES_IN_DAY;
    }

    if (hours !== 0) {
        hours = hours * MINUTES_IN_HOUR;
    }

    return _getMinutesDiff(milliseconds) + days + hours;
}

module.exports = dateDifference;
