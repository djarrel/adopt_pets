import React from 'react';

const Pet = props => {
    return (
        <div>
            <h1>props.name</h1>
            <h1>props.animal</h1>
            <h1>props.breed</h1>
        </div>
    )
}

// export default function({name, animal, breed}){
//     return React.createElement("div", null, [
//         React.createElement("h1", null, name),
//         React.createElement("h2", null, animal),
//         React.createElement("h2", null, breed)
//     ]);
// }
