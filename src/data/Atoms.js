import {atom} from 'recoil'

export const counterAtom = atom(
    {
        key:'counter',
        default:0
    }
)

export const Todos = atom({
    key:'todoArr',
    default:[]
})