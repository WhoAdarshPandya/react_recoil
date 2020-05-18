import React from 'react'
import {counterAtom} from '../data/Atoms'
import {useRecoilState} from 'recoil'

export default function Decrement() {
    const [counter,setCounter] = useRecoilState(counterAtom)
    const DecVal = () => {
        if(counter > 0)
        {
            setCounter(prev => prev-1)
        }
    }
    return (
        <div>
            <button onClick = {DecVal}>-</button>
        </div>
    )
}
