import React from 'react'
import classes from './OneMenu.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';


const OneMenu = ({onClick, userName, loginIn}) => {

    
    return(
        <div className = {classes.OneMenu}>
            <ul>
                { !loginIn ?  <li><Link to = {'/register'} > Register </Link> </li> : null }
                
                
                <li><Link to = "/login"  onClick = {onClick}> {userName} </Link> </li>
                

            </ul>
        </div>
    )
}

export default OneMenu