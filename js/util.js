const getRandomInteger = (min, max) => {
  if (min >= 0 && min < max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  throw new RangeError('Переданные значения не входят в допустимый диапазон');
};

const getUniqueRandomInteger = (min, max) => {
  const uniqueValues = [];
  const uniqueValue = getRandomInteger(min, max);


}

const verifyStringLength = (string, maxLength) => {
  return string.length <= maxLength;
};


