import { getRandomInt } from './utils';

export const MALE = 'male';
export const FEMALE = 'female';
export const NB = 'non-binary';

const genders = [MALE, FEMALE, NB];

export const getGender = () => genders[getRandomInt(genders.length)];
