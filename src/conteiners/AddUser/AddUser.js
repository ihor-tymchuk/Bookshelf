import React, {Component} from 'react'
import classes from './AddUser.css'
import BtnAdd from '../../components/UI/Buton/BtnAdd/BtnAdd'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {enterReg, createNewUser} from '../../store/actions/regUserAction.js'
import { REG_LAST_NAME, REG_FIRST_NAME, REG_LIST, REG_LOGIN, REG_PASSWORD, REG_BIRTHDAY_D, REG_BIRTHDAY_M, REG_BIRTHDAY_Y } from '../../store/actions/actionsTypes'

class AddUser extends Component {
    render (){
        return (
            <div className = {classes.AddUser}>
                <div>

                <h2>Register Account</h2>
                
                <input 
                    type = "text" 
                    placeholder = "First name*" 
                    name = "firstName" 
                    value = {this.props.FirstName} 
                    onChange = {(event, type ) => this.props.enterReg(event, REG_FIRST_NAME)}
                />

                <input 
                    type = "text" 
                    placeholder = "Last name*" 
                    name = "lastName" 
                    value = {this.props.LastName} 
                    onChange = {(event, type ) => this.props.enterReg(event, REG_LAST_NAME)} 
                />

                <input 
                    type = "text" 
                    placeholder = "List of interest*" 
                    name = "listInterest" 
                    value = {this.props.List} 
                    onChange = {(event, type ) => this.props.enterReg(event, REG_LIST)}
                />

                <input 
                    type = "text" 
                    placeholder = "Login*" 
                    name = "login" 
                    value = {this.props.Login} 
                    onChange = {(event, type ) => this.props.enterReg(event, REG_LOGIN)}
                />

                <input 
                    type = "password" 
                    placeholder = "Password*" 
                    name = "password" 
                    value = {this.props.Password} 
                    onChange = {(event, type ) => this.props.enterReg(event, REG_PASSWORD)}
                />

                    <div>
                        <label>Birthday</label>

                        <input 
                            type = "number" 
                            min = "1"
                            max = "31"
                            placeholder = "Day*" 
                            name = "birth_day" 
                            value = {this.props.BirthdayDay} 
                            onChange = {(event, type ) => this.props.enterReg(event, REG_BIRTHDAY_D)}
                        />

                        <input 
                            type = "numbert" 
                            min = "1"
                            max = "12"
                            placeholder = "Month*" 
                            name = "birth_month" 
                            value = {this.props.BirthdayMonth} 
                            onChange = {(event, type ) => this.props.enterReg(event, REG_BIRTHDAY_M)}
                        />

                        <input 
                            type = "number"
                            min = "1900"
                            max = "2014"
                            placeholder = "Year*" 
                            name = "birth_year" 
                            value = {this.props.BirthdayYear} 
                            onChange = {(event, type ) => this.props.enterReg(event, REG_BIRTHDAY_Y)}
                        />

                    </div>

                <Link to = '/login'> 
                    <BtnAdd 
                    text = "Register"
                    onClick = { (firstName, lastName, brD, brM, brY, list, login, password) => 
                        this.props.createNewUser(
                            this.props.FirstName,
                            this.props.LastName,
                            this.props.BirthdayDay,
                            this.props.BirthdayMonth,
                            this.props.BirthdayYear,
                            this.props.List,
                            this.props.Login,
                            this.props.Password
                        )}
                    />
                </Link>
                </div>
                
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        FirstName: state.usersReducer.valueRegFirstName,
        LastName: state.usersReducer.valueRegLastName,
        BirthdayDay: state.usersReducer.valueRegBirthdayDay,
        BirthdayMonth: state.usersReducer.valueRegBirthdayMonth,
        BirthdayYear: state.usersReducer.valueRegBirthdayYear,
        List: state.usersReducer.valueRegList,
        Login: state.usersReducer.valueRegLogin,
        Password: state.usersReducer.valueRegPassword,
    }
}

function mapDispatchToProps(dispatch) {
    return {
         enterReg: (input, type) => dispatch( enterReg (input, type)),
         createNewUser: (firstName, lastName, brD, brM, brY, list, login, password) => dispatch( createNewUser (firstName, lastName, brD, brM, brY, list, login, password) )
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (AddUser)