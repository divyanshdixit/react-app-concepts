import React, {useState} from 'react'

const Notes = (props) => {
    const {title, content, id, deleteNote} = props;

    const deleteCard = () => {
        alert(`i'm deleted id: ${id}`)
        deleteNote(id)
    }

    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"> {content}</p>
                    <button type="button" className="btn btn-danger" onClick={deleteCard}>
                        Delete
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-primary">
                        Edit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Notes
