import React from 'react'
import classes from "./TwoMenu.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const TwoMenu = ({userId}) => {

    // const liTwoMenu = ['My books', 'Collection of books','Friends']

    return (
        <div className = {classes.TwoMenu}>
            <div>
            <ul>
                            
            <li> <Link to = {`/user/userId=${userId}`} > My books </Link> </li>
            <li> <Link to ={`/user/userId=${userId}/collection`} > Collection of books </Link> </li>
            <li> <Link to ={`/user/userId=${userId}/friends`} > Friends </Link> </li>
                            
            </ul>
            </div>
        </div>
    )
}

export default TwoMenu

