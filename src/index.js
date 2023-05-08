import uniqueRandomArray from 'unique-random-array';
const starWarsNames = await import('./starwars-names.json', { 
    assert: {
        type: 'json'
    }
});

export const all = () => { return starWarsNames };
//export let random = uniqueRandomArray(starWarsNames);
export let random = uniqueRandomArray([1, 2, 3, 4]); // FOR TESTING ONLY