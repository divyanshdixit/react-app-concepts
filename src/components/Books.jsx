import React from 'react';
import Author from './Author';

const Books = (props) => { // props.bookname
    return(
        <>
            <h1>Book name is: {props.bookname}</h1>
            <Author authorname={props.authorname}/>
        </>
    )
}

export default Books;