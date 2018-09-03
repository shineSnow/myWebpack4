import React from 'react'
import style from './style.css'
console.log('style',style)

export default class extends React.Component {
    render() {
        return (
            <div>
                <h1  className={style.co} style={{padding:'5px'}}>index</h1>
                <div>it is the success light!总是会有很多坑,但是我会勇往直前!下面是route</div>
            </div>
        )
    }
}