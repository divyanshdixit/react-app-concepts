import React, {useState,useRef, useEffect} from 'react'
import CreateNote from './CreateNote'
import Footer from './Footer'
import Header from './Header'
import Notes from './Notes'

const NoteProject = () => {

    const componentRef = useRef();

    const [item, setItem] = useState([]);

    const sendNoteData = (data) =>  {
        setItem( (prevItem) => {
            return [...prevItem, data];
        })
    }

    const deleteData = (id) => {
        setItem( (prevItem) => {
            return prevItem.filter( (val, index) => {
                return index !== id;
            })
        })  
    }

    return (
        <div>
            <Header/>

            <CreateNote noteData= {sendNoteData} ref={componentRef}/>

            <div style={{display:'flex'}}>
            {
                item.map( (itemVal, index) => {
                    return <Notes id={index} key={index} 
                            title={itemVal.title} 
                            content={itemVal.body} 
                            deleteNote={deleteData}
                            />
                })
            }
            </div>

            <Footer/>
        </div>
    )
}

export default NoteProject
