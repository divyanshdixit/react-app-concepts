import axios from 'axios'
import React, { useState, useEffect } from 'react'

export const UseEffectHookDemo = () => {
    const [item, setitem] = useState('posts')
    const [count, setCount] = useState();
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/${item}`)
            .then( (res) => {
                console.log(res)
                setCount(res.data.length)
            })
            .catch( (err) => {
                console.log(err)
            })
    }, [item])

    const getValue = (e) => {
        setitem( e.target.value);
    }
    return (
        <div>
            <h1> Json have {count} items in {item} </h1>
        
            <select value={item} onChange={getValue}>
                <option value="posts"> Posts</option>
                <option value="comments">Comments</option>
                <option value="albums">Albums</option>
            </select>
        </div>
    )
}
