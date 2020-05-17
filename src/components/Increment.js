import React from 'react'
import { useRecoilState } from 'recoil'
import {counterAtom} from '../data/Atoms'
export default function Increment() {
    const [counter,setCounter] = useRecoilState(counterAtom)
    const IncVal = () =>
    {
        setCounter(prev => prev+1)
    }
    return (
        <div>
            <button onClick={IncVal}>+</button>
        </div>
    )
}
