const getRequiredData = (originalData, transformationScheme) => {
  /* Your code here */
};

const localizeData = (originalData, localizationScheme) => {
  /* Your code here */
};

const transformData = (originalData) => {
  /* Your code here */
};


const processData = (originalData, transformationScheme, localizationScheme) => {
  const requiredData = getRequiredData(originalData, transformationScheme);
  const localizedData = localizeData(requiredData, localizationScheme);

  return transformData(localizedData);
};

module.exports = {
  processData,
  getRequiredData,
  localizeData,
  transformData
};
