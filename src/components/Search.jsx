import axios from 'axios';
import React, { useState } from 'react'
import SearchResult from './SearchResult';

const Search = () => {
    const [item, setitem] = useState('')
    // const [image, SetImage] = useState();

    const searchItem = (e) => {
        const {value} = e.target;
        setitem(value);       

        // axios.get(`https://source.unsplash.com/${item}`)
        //     .then( (res) => {
        //         SetImage(res.data);
        //         console.log(res);
        //     })
        //     .catch( (err) => {
        //         console.log(err);
        //     }) 
    }

    
    return (
        <div style={{color:'red', textAlign:'center'}}>
            <h1> Please search for items </h1>
            
            <input type="text" placeholder="Search your item" value={item} onChange={searchItem}/>

            <SearchResult search={item}/>
        </div>
    )
}

export default Search
