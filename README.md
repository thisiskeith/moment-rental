# momentjs-rental

#### Summary
Extends Moment.js to properly calculate the number of rental days between two given dates


#### Syntax: Add rental days to current date
```
moment().rentalAdd(days[, saturdays]);
```
#### Parameters
`days` [integer] Number of rental days to add to current date
`saturdays` [BOOL] Weather or not to include Saturdays 


#### Syntax: Get rental day breakdown
```
moment(endDate).rentalDays(startDate[, saturdays]);
```
#### Parameters
`endDate` [moment object] End date of rental
`startDate` [moment object] Start date of rental
`saturdays` [BOOL] Weather or not to include Saturdays


## Installation

#### Add dependency to package.json
```
...
"dependencies": {
    "momentjs-rental": "git+ssh://git@github.com:thisiskeith/momentjs-rental.git"
}
...
```
#### Add to application
```
npm install
```
#### Require in project
```
var moment = require('moment');
var momentRental = require('moment-rental');
```

## Examples

#### Get new end date
```
moment([2015, 2, 12]).rentalAdd(3).format('MM-DD-YYYY');
/* 03-17-2015 */
```
#### Get new end date including Saturdays
```
moment([2015, 2, 12]).rentalAdd(3, true).format('MM-DD-YYYY');
/* 03-16-2015 */
```
#### Get rental day breakdown
```
moment([2015, 2, 12]).rentalDays([2015, 2, 4]);
/* {rentalDays: 6, days: 0, weeks: 1, fourWeeks: 0} */
```
#### Get rental day breakdown including Saturdays
```
moment([2015, 2, 12]).rentalDays([2015, 2, 4], true);
/* {rentalDays: 7, days: 0, weeks: 1, fourWeeks: 0} */
```
