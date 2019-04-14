import React, {Component} from 'react'
import classes from './CollectBooks.css'
import { connect } from 'react-redux'
import SerchBook from '../../conteiners/SerchBook/SerchBook.js'
import List from '../../components/List/List'
import { addBookForUser} from '../../store/actions/booksActions'


class CollectBooks extends Component {

    componentDidMount(){
        console.log('did',this.props.usersState)
    }

    render(){
        return(
            <div className = {classes.CollectBooks}>

                <SerchBook /> 

                <h2>Collection books for you </h2>
                <List 
                    books ={this.props.valueSerch === '' ? this.props.allBooks: this.props.arrBooks} 
                    text = "Add"
                    onClick = { (name, year, author, userId, usersArr) => this.props.addBookForUser(name, year, author, this.props.userId, this.props.usersArr) }
                />
                
            </div>
        ) 
    }
}

function mapStateToProps (state) {
    return {
        arrBooks: state.booksReducer.BooksSerch,
        allBooks: state.booksReducer.Books,
        valueSerch: state.booksReducer.valueSerch,
        userId: state.loginReducer.userId,
        usersArr: state.usersReducer.users,
        usersState: state.usersReducer.users[0]
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addBookForUser: (name, year, author, userId, usersArr) => dispatch( addBookForUser(name, year, author, userId, usersArr) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CollectBooks)