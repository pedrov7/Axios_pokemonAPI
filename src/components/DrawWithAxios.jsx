import React, {useState } from 'react';
import axios from 'axios';

export const DrawWithAxios = () => {

    const [list, setList] = useState([]);
   

    const handleOnClick = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1200')
                .then(response => { setList(response.data.results) })  
                .catch( e => alert(e))
    }



    return (

        <div style={{ width: 500 }}>
        {/* <div> */}
            <h1 className="text-primary">Pokemon List</h1>
            <button onClick={handleOnClick} type="button" className="btn btn-warning">Click to Fetch Pokemon List</button>
            <br></br>
            <br></br>
            <div className="list-group">
                {list.length > 0 && list.map((pokeName, index) => {
                    // return (<li key={index}>{pokeName.name}</li>)
                    return(<button key = {index} type="button" className="list-group-item list-group-item-action">{pokeName.name}</button>)
                }
                )}
            </div>
        </div>);
};
