import React, { Component } from 'react'
import Login from './conteiners/Login/Login.js'
import Menu from './conteiners/Menu/Menu.js'
import AddUser from './conteiners/AddUser/AddUser.js'
import classes from './App.css'
import Error404 from './components/Eror404/Error404.js';
import Footer from './conteiners/Footer/Footer.js';
import UserPage from './conteiners/UserPage/UserPage.js';
import Friends from './conteiners/Friends/Friends.js'
import {Switch, Route, Redirect} from 'react-router-dom'
import StartPage from './conteiners/StartPage/StartPage.js';
import CollectBooks from './conteiners/ColectBooks/CollectBooks.js';
import { connect } from 'react-redux';
import BooksFriend from './components/BooksFriend/BooksFriend.js';
import { addBookForUserWithFriends } from './store/actions/booksActions.js';



class App extends Component {
 
  render() {
    return (
      <div className = {classes.App}>
        <Menu />

        <Switch>
          <Route path = "/home" component = {StartPage} /> 
          
          <Route path = "/login" exact render = {
              () => (
                  this.props.loginIn ? (<Redirect to = {`/user/userId=${this.props.userId}` } />
                ): (<Route path="/login" component = {Login} exact />)
              )
            } 
          />

          <Route path = {`/user/userId=${this.props.userId}/friends`} component = {Friends} exact />

            {this.props.usersArr.map( (friend, index) => (
                <Route key = {index}  path = {`/user/userId=${this.props.userId}/friends=${friend.id}`} render = { () => {return(
                  <BooksFriend
                    userId = {this.props.userId}
                    friendId = {friend.id}
                    usersArr = {this.props.usersArr}
                    FNFriend = {friend.FirstName} 
                    LNFriend = {friend.LastName}
                    onClick = { (name, year, author, friendId, usersArr, userId) => this.props.addBookForUserWithFriends(name, year, author, friend.id, this.props.usersArr, this.props.userId) }
                  /> )}}
                exact />))
            }

          <Route path = "/register" component = {AddUser} exact /> 
          <Route path = {`/user/userId=${this.props.userId}`} component = {UserPage} exact />
          <Route path =  {`/user/userId=${this.props.userId}/collection`} component = {CollectBooks} />
          <Route component = {Error404} />
        </Switch>

{/* <AddUser /> */}
{/* <Login /> 

<CollectBooks />
<UserPage /> */}

        <Footer /> 
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginIn: state.loginReducer.loginIn,
    usersArr: state.usersReducer.users,
    userId: state.loginReducer.userId
  }
}

function mapDispatchToProps(dispatch){
  return {
    addBookForUserWithFriends: (name, year, author, friendsId, usersArr, userId) => dispatch( addBookForUserWithFriends(name, year, author, friendsId, usersArr, userId) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps) ( App )


