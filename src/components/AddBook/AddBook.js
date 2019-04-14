import React from 'react'
import classes from './AddBook.css'

const AddBook = ({valueNameBook, valueYearBook, valueAuthorBook, onChangeName, onChangeYear, onChangeAuthor, onClickButtonAdd}) => {
    return (
        <div className = {classes.AddBook}>
            <div>
            <input 
                type='text' 
                placeholder = 'name book' 
                name = 'nameBook'
                value= {valueNameBook}
                onChange = {onChangeName}
            />

            <input 
                type='text' 
                placeholder = 'year' 
                name = "yearBook"
                value={valueYearBook} 
                onChange = {onChangeYear}
            />

            <input 
                type='text' 
                placeholder = 'author' 
                name ="author"
                value={valueAuthorBook}
                onChange = {onChangeAuthor}
            />
            </div>
            
            <button onClick = {onClickButtonAdd}> Add book </button>
        </div>
    )
}

export default AddBook