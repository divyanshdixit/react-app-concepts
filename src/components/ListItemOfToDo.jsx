import React from 'react';
// import DeleteIcon from '@material-ui/icons/Delete';

const ListItems = (props) => {
    return(
        <>
            <li onClick={ () => {
                    props.onSelect(props.id)
                }}> 
                {props.val}
            </li>
        </>
    )
}

export default ListItems;  