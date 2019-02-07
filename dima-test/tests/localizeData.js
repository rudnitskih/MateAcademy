const {localizeData} = require('../processor');
const {isEqual} = require('lodash');

const originalData = [
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

const localizationScheme = {
  'fullName.surname': 'Прізвище',
  'fullName.middleName': 'По-батькові'
};

const expectedData = [
  {
    fullName: {
      'Прізвище': 'xxx',
      firstName: 'yyy',
    }
  },
  {
    fullName: {
      'Прізвище': 'Прізвище',
      firstName: 'YYY',
    }
  }
];

const actualData = localizeData(originalData, localizationScheme);


console.assert( isEqual(actualData, expectedData));
