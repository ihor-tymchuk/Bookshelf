import React from 'react'
import classes from './ListFriends.css'
import ListFrItem from './ListFrItem/ListFrItem';



const ListFriends = ({arrFriends, userId}) => {
    
    return (
    <div className = {classes.ListFriends}> 
       <ul>
               
       {
            arrFriends.map( (friend, key) => {
                return (
                    <ListFrItem
                        key = {key}
                        keys = {key}
                        nameFr={friend.nameFr}
                        id={friend.id}
                        userId ={userId}
                        sumBook={friend.sumBook}
                    />
                )
                    
            })
        }     
        
            </ul>
        
    </div>
    )
}

export default ListFriends