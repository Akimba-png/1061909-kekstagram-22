const getRandomInteger = (min, max) => {
  if (min >= 0 && min < max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  throw new RangeError('Переданные значения не входят в допустимый диапазон');
};


const verifyStringLength = (string, maxLength) => {
  return string.length <= maxLength;
};


const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};


const createUniqueRandomGenerator = (min, max) => {
  const uniqueValues = [];
  return () => {
    if (uniqueValues.length >= (max - min + 1)) {
      throw new Error('Превышен допустимый интервал диапазона');
    }
    let randomValue = getRandomInteger(min, max);
    while (uniqueValues.includes(randomValue)) {
      randomValue = getRandomInteger(min, max);
    }
    uniqueValues.push(randomValue);
    return randomValue;
  };
};

export {getRandomInteger, verifyStringLength, getRandomArrayElement, createUniqueRandomGenerator};
