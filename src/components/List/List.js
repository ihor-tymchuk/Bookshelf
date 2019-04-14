import React from 'react'
import classes from './List.css' 
import ListItem from './ListItem/ListItem';


const List = ({books, text, onClick, friendId, usersArr, userId}) => {
    return(
        <div className = {classes.List}>
                <ul>{
                    books.map( (book, key) => {
                    return (
                        <ListItem 
                        friendId = {friendId}
                        userId = {userId}
                        key = {key}
                        keys = {key}

                        name={book.name}
                        year={book.year}
                        auth={book.author}

                        text = {text}

                        usersArr = {usersArr}
                        onClick = {onClick}
                        />
                    )
                    
                    })
                }
                
            </ul>
        </div>
    )
    
}

export default List