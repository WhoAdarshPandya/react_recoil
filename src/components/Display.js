import React from 'react'
import {useRecoilState,useRecoilValue} from 'recoil'
import {counterAtom} from '../data/Atoms'

//uRS for getting and updating
//urV for getting value only

export default function Display() {
    const counter = useRecoilValue(counterAtom)
    return (
        <div>
            Display here
            <p>{counter}</p>
        </div>
    )
}
