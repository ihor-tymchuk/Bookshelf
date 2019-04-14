import React from 'react'
import classes from './BooksFriend.css'
import List from '../List/List.js'
import { booksUser } from '../../function/function'

const BooksFriend = ({onClick, friendId, usersArr, userId, FNFriend, LNFriend}) => {
    return (
        <div className = {classes.BooksFriend}>
            <h1> Collection books {FNFriend} {LNFriend}</h1>
                   <List
                      books = {booksUser (friendId, usersArr)}
                       text = "Add"
                       userId = {userId}
                       friendId = {friendId}
                       onClick = {onClick}
                   />
               </div>
    )  
}

export default BooksFriend