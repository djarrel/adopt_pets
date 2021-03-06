import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import Results from './Results'
import dropDown from './dropdown'

const SearchParams = () => {
    // replace location
    const [ location, updateLocation ] = useState("Seattle, WA")
    const [breeds, updateBreeds] = useState([])
    const [ animal, AnimalDropdown ] = dropDown("Animal", "horse", ANIMALS);
    const [breed, BreedDropdown, updateBreed] = dropDown("Breed","", breeds);
    const [pets, setPets] = useState([]);

    async function requestPets() {
        const {animals} = await pet.animals({
            location,
            breed,
            type: animal
        })
        setPets(animals || [])
        console.log(animals)
    }
    

useEffect(() => {
    updateBreeds([]);
    updateBreed('');
    pet.breeds(animal).then(({ breeds }) => {
        const breedItems = breeds.map(({ name }) => name);
        updateBreeds(breedItems)
    }, console.error)
}, [animal, updateBreed, updateBreeds])

    return (
        <div className="search-params">
            <form onSubmit= {(e) => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    location
                    <input 
                    id="location" 
                    value={location} 
                    placeholder="Location" 
                    onChange={(e) => updateLocation
                    (e.target.value)}
                />
                </label>
                    <AnimalDropdown/>
                    <BreedDropdown/>
                <button>submit</button>
            </form>
            <Results pets={pets}/>
        </div>
    )
}

export default SearchParams;