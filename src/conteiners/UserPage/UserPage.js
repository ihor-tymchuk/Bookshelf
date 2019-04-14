import React, {Component} from 'react'
import classes from './UserPage.css'
import List from '../../components/List/List'
import {connect} from 'react-redux'
import AddBook from '../../components/AddBook/AddBook'
import {enterNameInput, enterAuthorInput, enterYearInput, clickAddBook, clickDeleteBook} from '../../store/actions/listActions'
import { nameUser, booksUser, booksNum } from '../../function/function.js';

class UserPage extends Component {

    componentWillReceiveProps(nextProps) {
        if(nextProps.myState !== this.props.myState) {
          // nextProps.myProp имеет другое значение, чем наше текущее myProps
          // поэтому мы можем что-нибудь рассчитать базируясь на новом значении.
        }
      }
      
    render(){

        const userId = this.props.userId
        const usersArr = this.props.usersArr
        const nameBook = this.props.valueNameBook
        const yearBook = this.props.valueYearBook
        const authorBook = this.props.valueAuthorBook
        // let issu = 'it is ...'

        

        return(
            <div className = {classes.UserPage}>
                <h1>{nameUser (userId, this.props.usersArr)}, your collection of the best books</h1>

                <List 
                    books = {booksUser (userId, usersArr)}
                    text = "Delete"
                    id = {this.props.userId}
                    usersArr = {usersArr}
                    onClick = {(name, year, author, id, usersArr, numb, keys) => this.props.clickDeleteBook(nameBook,yearBook,authorBook, userId, this.props.usersArr, booksNum (userId, this.props.usersArr), keys)}
                />

                <AddBook 
                    valueNameBook = {this.props.valueNameBook}
                    valueYearBook = {this.props.valueYearBook}
                    valueAuthorBook = {this.props.valueAuthorBook}
                    onChangeName = {(event) => this.props.enterNameInput(event)}
                    onChangeYear = {(event) => this.props.enterYearInput(event)}
                    onChangeAuthor = {(event) => this.props.enterAuthorInput(event)}
                    onClickButtonAdd = {(name, year, author, id, usersArr, numb, keys) => this.props.clickAddBook(nameBook,yearBook,authorBook, userId, this.props.usersArr, booksNum (userId, this.props.usersArr), keys)}
                />

            </div>
        )
    }
}

function mapStateToProps (state){
    return {
        loginIn: state.loginReducer.loginIn,
        userId: state.loginReducer.userId, 
        usersArr: state.usersReducer.users,

        valueNameBook: state.usersReducer.valueNameBook,
        valueYearBook: state.usersReducer.valueYearBook,
        valueAuthorBook: state.usersReducer.valueAuthorBook,

        myState: state.usersReducer

    }
}

function mapDispatchToProps (dispatch) { 
    return {
        enterNameInput: (name) => dispatch( enterNameInput(name) ),
        enterYearInput: (year) => dispatch( enterYearInput(year) ),
        enterAuthorInput: (author) => dispatch( enterAuthorInput(author) ),
        clickAddBook:    (name, year, author, id, usersArr, numb, keys) =>    dispatch( clickAddBook   (name, year, author, id, usersArr, numb, keys) ),
        clickDeleteBook: (name, year, author, id, usersArr, numb, keys) => dispatch( clickDeleteBook(name, year, author, id, usersArr, numb, keys) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UserPage)