import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';

module.exports = {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames)
};