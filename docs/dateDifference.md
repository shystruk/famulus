## dateDifference(date, differenceType)
[Source](../dateDifference.js)

Difference between now and date which is passed, in formats 'milliseconds', 'days', 'hours', 'minutes'

#### Custom Needs

#### Since
1.2.0

#### Category 
Date

#### Arguments
{Date} date             - The Date to inspect<br>
{String} differenceType - [ 'days', 'hours', 'minutes', 'milliseconds', 'all' ]
 
#### Returns
{Number|Object} Returns the numeric value or object depends on passed differenceType param

#### Example
Example result for now is Date('12-26-2017')

```javascript
dateDifference(new Date('12-20-2017'), 'days')
// => 6
```

```javascript
dateDifference(new Date('12-20-2017'), 'hours')
// => 156
```

```javascript
dateDifference(new Date('12-20-2017'), 'minutes')
// => 9381
```

```javascript
dateDifference(new Date('12-20-2017'), 'milliseconds')
// => 555261242
```

```javascript
dateDifference(new Date('12-20-2017'), 'all')
// => {days: 6, hours: 12, minutes: 30, milliseconds: 563406381}
```