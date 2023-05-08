import uniqueRandomArray from 'unique-random-array';
const starWarsNames = await import('./starwars-names.json', { 
    assert: {
        type: 'json'
    }
});

export const all = () => { return starWarsNames };
export const random = () => { return uniqueRandomArray(starWarsNames) };