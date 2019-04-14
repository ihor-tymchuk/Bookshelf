import React from 'react'
import classes from './ListItem.css'
import uniqueId from 'lodash/uniqueId'
import BtnAddBook from '../../UI/Buton/BtnAddBook/BtnAddBook';

const ListItem = ({keys, name, year, auth, text, onClick, friendId, usersArr, userId}) => {
    const listId = uniqueId("list_book_user_")
    return (
        <div className = {classes.ListItem}  >
            <div> {keys+1} </div>
            
            <li key ={listId}> {name}, {year}, {auth}</li>
            <BtnAddBook text = {text} onClick = {() => onClick ( name, year, auth, friendId, usersArr, userId, keys)}/>
            
        </div>
        
    )
}

export default ListItem