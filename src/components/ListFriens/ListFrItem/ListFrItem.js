import React from 'react'
import classes from './ListFrItem.css'
import uniqueId from 'lodash/uniqueId'
import { Link } from 'react-router-dom/cjs/react-router-dom';

const ListFrItem = ({nameFr, id, sumBook, keys, userId}) => {
    const listFriends = uniqueId("list_friends_")
    
    return(
        <div className = {classes.ListFrItem} >
            <div>
                {keys+1}
            </div>

            <li key ={listFriends}> 
                <Link to ={`/user/userId=${userId}/friends=${id}`} > {nameFr} </Link> 
            <p>{sumBook} pieces of books</p>
            
            </li>


        </div>
    )
}

export default ListFrItem