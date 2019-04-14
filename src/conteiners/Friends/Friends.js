import React, {Component} from 'react'
import classes from './Friends.css'
import {connect} from 'react-redux'
import ListFriends from '../../components/ListFriens/ListFriends';
import { sortFriends, nameUserFriend } from '../../function/function';





class Friends extends Component {
 
    render(){
        const arr = nameUserFriend(this.props.userId, this.props.usersArr)
        return(
            <div className = {classes.Friends}>
                <h2>Your Friends</h2>
                
                 <ListFriends 
                    arrFriends = {sortFriends(arr)}
                    userId = {this.props.userId}
                />
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        loginIn: state.loginReducer.loginIn,
        userId: state.loginReducer.userId, 
        usersArr: state.usersReducer.users,
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Friends)