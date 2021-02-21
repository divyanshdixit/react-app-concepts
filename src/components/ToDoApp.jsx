import React, {useState} from 'react';
import ListItems from './ListItemOfToDo';

const ToDoApp = () => {

    const [listItems, updateItems] = useState({
        item:''
    })

    // we take an empty array in state for list and then use map method to list down 
    const [list, setlist] = useState([])

    function changeEvent(event) {
        const {name, value } = event.target;

        updateItems( (prev) => {
            return{
                ...prev,
                [name] : value
            }
        })
    }

    function clickEvent(event) {
        event.preventDefault();
        setlist( (oldItems) => {
            return [...oldItems, listItems.item ]
        })
        updateItems( (prev) => {
            return{
                item:''
            }
        })
    }

    function deleteItems(id) {
        setlist( (olditems) => {
            return olditems.filter( (elem, index) => {
                return index !== id;
            })
        })
    }

    return(
        <>
            <div className="main_div">
                <h1> ToDo List</h1>
                <input type="text" name="item" value={listItems.item} placeholder="Add item" onChange={changeEvent}/>
                <button type="button" onClick={clickEvent}> + </button>

                <ol>
                    {list.map( (itemVal, index) => {
                        return (
                            <ListItems key={index} id={index} val={itemVal} onSelect={deleteItems}/>
                        )
                    })}
                </ol>
            </div>
        </>
    )
}

export default ToDoApp;