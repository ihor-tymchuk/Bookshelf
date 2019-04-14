import React, {Component} from 'react'
import classes from './Menu.css'
import {connect} from 'react-redux'
import { signOut } from '../../store/actions/loginActions.js'
import OneMenu from '../../components/UI/OneMenu/OneMenu'
import TwoMenu from '../../components/UI/TwoMenu/TwoMenu'
import {  nameUserMenu } from '../../function/function'

class Menu extends Component {
    render() {
        
        return(
            <div className = {classes.Menu}>
                <OneMenu 
                    // liOneMenu = {loginInTrueFalseMenu(this.props.loginIn, this.props.liOneMenuT, this.props.liOneMenuF)}
                    loginIn = {this.props.loginIn}
                    userName = {this.props.loginIn ? nameUserMenu(this.props.userId, this.props.usersArr): "Login"}
                    onClick = { (LogTrueFalse) => this.props.signOut(this.props.loginIn) }
                />

                { this.props.loginIn ? 
                    <TwoMenu
                        userId = {this.props.userId} 
                        liTwoMenu = {this.props.liTwoMenu}
                    /> : null }
                
                
            </div>
        )
    }
}

function mapStateToProps (state) {
    return{
        loginIn: state.loginReducer.loginIn,

        userName: state.loginReducer.userName, // тимчасово

        liOneMenuT: state.loginReducer.liOneMenuT,
        liOneMenuF: state.loginReducer.liOneMenuF,
        liTwoMenu: state.loginReducer.liTwoMenu,

        userId: state.loginReducer.userId,
        usersArr: state.usersReducer.users
    }
}

function mapDispatchToProps (dispatch) {
    return{
        signOut: (LogTrueFalse) => dispatch( signOut(LogTrueFalse) )
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Menu)