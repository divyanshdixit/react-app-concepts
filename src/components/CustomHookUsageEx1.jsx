import React, {useState} from 'react'
import useCustomHook from './CustomHookDocumentTitle';

const CustomHookUsageEx1 = () => {
    const [count, setcount] = useState(0);

    useCustomHook(count);
    return (
        <div>
            <button onClick={() => setcount(count+1)}>  Count - {count}</button>
        </div>
    )
}

export default CustomHookUsageEx1
