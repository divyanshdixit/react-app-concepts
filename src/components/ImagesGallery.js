import React from 'react';

var img1 = '../images/logo192.png';
var img2 = '../images/logo192.png';

function Gallery(){
    return (
        <>
            <div className="image-series">
                <img src={img1} alt="Image1"/>
                <a href="localhost:3000">
                    <img src={img2} alt="Image2"/>
                </a>
            </div>
        </>
    )
}

export default Gallery;