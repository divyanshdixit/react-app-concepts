import React, {useState,useCallback} from 'react'
import CallbackHookButton from './CallbackHookButton'
import CallbackHookCount from './CallbackHookCount'
import CallbackHookTitle from './CallbackHookTitle'

const CallbackHookParent = () => {
    const [age, setAge] = useState(0)
    const [salary, setSalary] = useState(0)

    const incrementAge = useCallback(() => {
        setAge(age+1);
    },[age])// cache

    const incrementSalary = useCallback(() => {
        setSalary(salary+1);
    }, [salary])

    return (
        <div>
            Call back hook parent
            <CallbackHookTitle/>
            <CallbackHookCount text="age" count={age}/>
            <CallbackHookButton handleClick={incrementAge}> Increment Age </CallbackHookButton>
            <CallbackHookCount text="salary" count={salary}/>
            <CallbackHookButton handleClick={incrementSalary}> Increment Salary </CallbackHookButton>
        </div>
    )
}

export default CallbackHookParent
