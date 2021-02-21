import React from 'react';
import './App.css';
import Books from './components/Books';
import Data from './Data';

const App = () => {
    return(
        <>
            <Books bookname={Data[0].bookname} authorname={Data[0].author}/>
            <Books bookname={Data[1].bookname} authorname={Data[1].author}/>
        </>
    )
}

export default App;