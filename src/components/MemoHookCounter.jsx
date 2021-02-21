import React, {useMemo, useState} from 'react'

const MemoHookCounter = () => {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    }

    // useMemo(callback_fn, [dependency_array]) => return the cached value 
    // re-compute again only based on dependency array then not used cached value

    // const isEven = useMemo(() => { // return cached vaulue
    //     var i =0 ;
    //     while(i<2000000000) i++;
    //     return counterOne %2 === 0
    // }, [counterOne])

    // when state changes then whole component is render again then this isEven() function is excute again
    // and it will render other things late so to optimize this performance we use useMemo() hook.

    const isEven = () => {
        var i =0 ;
        while(i<2000000000) i++;
        return counterOne %2 === 0
    }

    return (
        <div>
            <button onClick={incrementOne}> 
                Count- {counterOne}
                <span> {isEven() ? 'Even' : 'Odd'} </span>
            </button>
            <button onClick={incrementTwo}> Count- {counterTwo}</button>
        </div>
    )
}

export default MemoHookCounter
