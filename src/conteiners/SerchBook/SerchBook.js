import React, {Component} from 'react'
import classes from './SerchBook.css'
import {connect} from 'react-redux'
import { enterSerch } from '../../store/actions/booksActions'

class SerchBook extends Component {
    render(){
        return (
            <div className = {classes.SerchBook} >
                    <input 
                        type = "text" 
                        placeholder = "serch book ..." 
                        name = "serchNameBook" 
                        value = {this.props.serch}
                        onChange = {(event) => this.props.enterSerch(event)}
                    />
    
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        serch: state.booksReducer.valueSerch,
        booksArchive: state.booksReducer.Books,
        booksArr: state.booksReducer.BooksSerch
    }
}

function mapDispatchToProps(dispatch){
    return{
        enterSerch: (serch) => dispatch( enterSerch(serch))
    }
}
    

export default connect(mapStateToProps, mapDispatchToProps)(SerchBook)