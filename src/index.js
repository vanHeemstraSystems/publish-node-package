import uniqueRandomArray from 'unique-random-array';
const starWarsNames = await import('./starwars-names.json', { 
    assert: {
        type: 'json'
    }
});

module.exports = {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames)
};