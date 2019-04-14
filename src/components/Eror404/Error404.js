import React from 'react'
import classes from './Error404.css'
import {Link} from 'react-router-dom'

const Error404 = () => {
    return (
        <div className = {classes.Error404} >
            
            <h1>
                OPPS! ERROR 404!
            </h1>

            <h3>
                You have some troubles. 
                <br/>
                The Web page you`re looking for does not exist Make sure you`ve typed the page may have move. 
            </h3>
            <div>
            <Link to= {"/login"} ><button> Go Home </button> </Link>
            </div>
            
        </div>
    )
}

export default Error404