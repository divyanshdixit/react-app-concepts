import axios from 'axios';
import React, {useState, useEffect} from 'react'

const ReducerHookFetching = () => {
    
    // State uisng with fetching data , next we do same with using reducer instead ofusing state
    const [Loading, setLoading] = useState(true);
    const [Post, setPost] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then( (res) => {
                console.log(res);
                setLoading(false);
                setPost(res.data);
                setError('');
            })
            .catch( (err) => {
                console.log(err.message);
                setLoading(false);
                setPost({});
                setError('Something went wrong!');
            })
        
    }, []);

    return (
        <div>
            {Loading ? 'loading...' : Post.title}
            {error ? error : null}
        </div>
    )
}

export default ReducerHookFetching
