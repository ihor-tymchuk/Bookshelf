import React, {Component} from 'react'
import classes from './Footer.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Footer extends Component {
    render(){

        const liFotter = ['Contact Us', 'Cookie Policy', 'Privacy Policy',  'Terms and Conditions', ' My Account Help']

        return(
            <div className = {classes.Footer}>
                <ul>
                   { liFotter.map( (lilist, key) => {return <Link key={key} to = {'/'+lilist}> <p>{lilist} </p> </Link>} )}
                </ul>
            </div>
        )
    }
}

export default Footer