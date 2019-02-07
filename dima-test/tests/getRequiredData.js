const {getRequiredData} = require('../processor');
const {isEqual} = require('lodash');

const originalData = [
  {
    fullName: {
      surname: 'xxx',
      firstName: 'yyy',
      middleName: 'zzz'
    }
  },
  {
    fullName: {
      surname: 'XXX',
      firstName: 'YYY',
      middleName: 'ZZZ'
    }
  }
];

const scheme = {
  fullName: {
    surname: true,
    firstName: true,
    middleName: false
  }
};

const expectedData = [
  {
    fullName: {
      surname: 'xxx',
      firstName: 'yyy',
    }
  },
  {
    fullName: {
      surname: 'XXX',
      firstName: 'YYY',
    }
  }
];

const actualData = getRequiredData(originalData, scheme);


console.assert( isEqual(actualData, expectedData));
