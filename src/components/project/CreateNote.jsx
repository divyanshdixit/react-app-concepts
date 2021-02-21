import React, {useState, useRef, useEffect} from 'react'
import EventBinding from '../EventBinding';

const CreateNote = (props, ref) => {
    
    const [note, setNote] = useState({
        title:'',
        body:''
    })

    const titleRef = useRef();
    const bodyRef = useRef();

    const [expand, setExpand] = useState(false);

    const {title, body} = note;

    const changeNote = (e) => {
        var {name, value} = e.target;

        setNote( (prev) => {
            return{
                ...prev,
                [name]:value
            } 
        })
    }
    
    const displayData = () => {
        if(bodyRef.current.value == '' && titleRef.current.value == ''){
            alert('Please fill the title and body first');
            return false;
        }
        
        props.noteData(note);
        setNote({
            title:'',
            body:''
        })
    }

    const expandBody = () => {
        setExpand(true);
    }
    
    const shrink = () => {
        setExpand(false);
    }

    return (
        <div className="text-center" onDoubleClick={shrink} >
            
            <form style={{width:'500px', margin:'auto'}} onSubmit={ (e) => e.preventDefault()}>

                <div class="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control title" id="title" ref={titleRef} name="title" value={title} onChange={changeNote} onClick={expandBody} placeholder="Enter note title"/>
                    
                </div>
                {expand ? 
                <>
                    <div class="mb-3">
                        <label htmlFor="body" className="form-label">Body</label>
                            <textarea className="form-control" id="body" ref={bodyRef} rows="3" name="body" value={body} onChange={changeNote} placeholder="Write a note"></textarea>
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary mb-3" onClick={displayData}>
                            Add
                        </button>
                    </div>
                </>
                : null }
            </form>
        </div>
    )
}

export default CreateNote
