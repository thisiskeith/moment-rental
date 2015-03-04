# Moment.js extension for rental day calculations
Extends Moment.js to properly calculate the number of rental days between two given dates

#### Add to application
```
var moment = require('moment');
var momentRental = require('moment-rental');
```
#### Get new end date
```
moment([2015, 2, 12]).rentalAdd(3).format('MM-DD-YYYY');
// 03-17-2015
```
#### Get new end date including Saturdays
```
moment([2015, 2, 12]).rentalAdd(3, true).format('MM-DD-YYYY');
// 03-16-2015
```
#### Get rental day breakdown
```
moment([2015, 2, 12]).rentalDays([2015, 2, 4]);
// {rentalDays: 6, days: 0, weeks: 1, fourWeeks: 0}
```
#### Get rental day breakdown including Saturdays
```
moment([2015, 2, 12]).rentalDays([2015, 2, 4], true);
// {rentalDays: 7, days: 0, weeks: 1, fourWeeks: 0}
```