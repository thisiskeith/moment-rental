# moment-rental

#### Summary
Extends Moment.js to properly calculate the number of rental days between two given dates


#### Syntax: Add rental days to current date
```js
moment().rentalAdd(days[, saturdays]);
```
#### Parameters
- `days (integer)` Number of rental days to add to current date
- `saturdays (BOOL)` Weather or not to include Saturdays


#### Syntax: Get rental day breakdown
```js
moment(endDate).rentalDays(startDate[, saturdays]);
```
#### Parameters
- `endDate (moment object)` End date of rental
- `startDate (moment object)` Start date of rental
- `saturdays (BOOL)` Weather or not to include Saturdays


## Installation

#### Add dependency to package.json
```js
"dependencies": {
    "moment-rental": "git+ssh://git@github.com:thisiskeith/moment-rental.git"
}
```
#### Add to application
```js
npm install
```
#### Require in project
```js
var moment = require('moment');
var momentRental = require('moment-rental');
```

## Examples

#### Get new end date
```js
moment('2015-02-04').rentalAdd(3).format('MM-DD-YYYY');
// 02-09-2015
```
#### Get new end date including Saturdays
```js
moment('2015-02-04').rentalAdd(3, true).format('MM-DD-YYYY');
// 02-07-2015
```
#### Get rental day breakdown
```js
moment('2015-02-12 08:00').rentalDays('2015-02-04 08:00');
// { Day: 0, FourWeek: 0, RentalDays: 6, Week: 1 }
```
#### Get rental day breakdown including Saturdays
```js
moment('2015-02-12 08:00').rentalDays('2015-02-04 08:00', true);
// { Day: 0, FourWeek: 0, RentalDays: 7, Week: 1 }
```

