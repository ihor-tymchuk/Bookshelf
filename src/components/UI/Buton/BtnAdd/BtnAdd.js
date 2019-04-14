import React from 'react'
import classes from './BtnAdd.css'

const BtnAdd = ({onClick, text}) => {
    return (
        
            <button className = {classes.BtnAdd} onClick={onClick}>{text}</button>
        
    )
}

export default BtnAdd