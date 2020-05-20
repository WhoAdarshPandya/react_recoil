import { atom } from 'recoil'

export const Todos = atom({
    key:'todoArr',
    default:[],
    dangerouslyAllowMutability: true
})


// var a = [1,2,3,4]
// var b = [...a.map(item => item)]