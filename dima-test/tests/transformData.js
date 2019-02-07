const {transformData} = require('../processor');
const {isEqual} = require('lodash');

const originalData = [
  {
    fullName: {
      'Прізвище': 'xxx',
      firstName: 'yyy',
    }
  },
  {
    fullName: {
      'Прізвище': 'XXX',
      firstName: 'YYY',
    }
  }
];
const expectedData = [
  {
    name: 'Прізвище',
    value1: 'xxx',
    value2: 'XXX'
  },
  {
    name: 'firstName',
    value1: 'yyy',
    value2: 'YYY'
  },
];

const actualData = transformData(originalData);


console.assert(isEqual(actualData, expectedData));
