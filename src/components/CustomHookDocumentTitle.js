import React, {useEffect} from 'react'

const useCustomHook = (count) => {
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
    return (
        <div>
            
        </div>
    )
}

export default useCustomHook
