import React from 'react'

const SearchResult = (props) => {
    if(props.search != ''){
        var imgSrc = `https://source.unsplash.com/800x600?${props.search}`
        return (
            <div>
                <img src={imgSrc} alt="Item image"/>
            </div>
        )
    }else{
        return null
    }
}

export default SearchResult
