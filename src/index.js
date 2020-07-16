import { getRace } from './lib/races';
import { getClass } from './lib/mainClasses';
import { getBG } from './lib/backgrounds';
import { getGender } from './lib/genders';
import { getName } from './lib/names';

const randomRace = getRace();
const randomClass = getClass(randomRace);
const book = randomClass.book || 'None';
const randomGender = getGender();
const randomBG = getBG();
const randomName = getName(randomGender);

const nameComponent = document.createElement('div');
nameComponent.innerHTML = `${randomName}, the ${randomGender} ${randomRace.fullRace}`;
nameComponent.style.fontWeight = 'bold';
nameComponent.style.marginBottom = '10px';

const classComponent = document.createElement('div');
classComponent.innerHTML = `${randomClass.mainClass}, ${randomBG} background`;

const sourceComponent = document.createElement('div');
sourceComponent.innerHTML = `PHB +1: ${book}`;

document.body.appendChild(nameComponent);
document.body.appendChild(classComponent);
document.body.appendChild(sourceComponent);
