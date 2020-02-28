import React, { useState } from 'react';

const SearchParams = () => {
    // replace location
    const [ location, updateLocation ] = useState("Seattle, WA")
    return (
        <div className="search-params">
            <form>
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
                <button>submit</button>
            </form>
        </div>
    )
}

export default SearchParams;