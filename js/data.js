import {getRandomInteger, getRandomArrayElement, createUniqueRandomGenerator} from './util.js';

const PHOTO_TITLE = 'My very lovely picture';
const STACK_NUMBER = 25;
const MIN_RANGE_VALUE = 1;
const MIN_LIKE_VALUE = 15;
const MaxRangeValue = {
  COMMENT_ID: 150,
  AVATAR: 6,
  COMMENT_COUNT: 6,
  LIKE: 200,
};

const possibleComments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const possibleNames = [
  'Кекс',
  'Рудольф',
  'Гипнокот',
  'Феликс',
  'Снежок',
  'Енот',
];


const getUniqueCommentId = createUniqueRandomGenerator(MIN_RANGE_VALUE, MaxRangeValue.COMMENT_ID);

const getPhotoComment = () => {
  return {
    id: getUniqueCommentId(),
    avatar: `img/avatar-${getRandomInteger(MIN_RANGE_VALUE, MaxRangeValue.AVATAR)}.svg`,
    message: getRandomArrayElement(possibleComments),
    name: getRandomArrayElement(possibleNames),
  };
};

const createPossibleComments = () => {
  return new Array(getRandomInteger(MIN_RANGE_VALUE, MaxRangeValue.COMMENT_COUNT)).fill(null).map(() => getPhotoComment());
}


const getPhotoDescription = (indexNumber) => {
  return {
    id: indexNumber + 1,
    url: `photos/${indexNumber + 1}.jpg`,
    description: PHOTO_TITLE,
    likes: getRandomInteger(MIN_LIKE_VALUE, MaxRangeValue.LIKE),
    comments: createPossibleComments(),
  };
};

const getStackOfPhotoDescription = () => {
  return new Array(STACK_NUMBER).fill(null).map((_, index) => getPhotoDescription(index));
};

export {getStackOfPhotoDescription};
