import React from 'react'
import classes from './BtnAddBook.css'

const BtnAddBook = ({onClick, text}) => {
    return (
        
            <button className = {classes.BtnAddBook} onClick={onClick}>{text}</button>
        
    )
}

export default BtnAddBook