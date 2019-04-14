import React, {Component} from 'react'
import classes from './Login.css'
import {connect} from 'react-redux'

import {enterName, enterPass, submitNew } from '../../store/actions/loginActions';
import BtnAdd from '../../components/UI/Buton/BtnAdd/BtnAdd';



class Login extends Component {

    render() {
      console.log(this.props)
        return (
            <div className = {classes.Login}>
              <div>

                  <h2>Sign in</h2>

                    <input 
                      type="text" 
                      placeholder="Login" 
                      name = 'logIn' 
                      value = {this.props.nameInput} 
                      onChange = {(event) => this.props.enterName(event)} 
                    />

                  <br/>

                    <input 
                      type= "password" 
                      placeholder="Password" 
                      name = 'pass' 
                      value = {this.props.passInput} 
                      onChange = {(event) => this.props.enterPass(event)}
                    />
                    
                  <br/>

                  <BtnAdd 
                      text = 'Submit'
                      onClick={ (log, pass, users) => this.props.inLogNew( this.props.nameInput,this.props.passInput, this.props.users ) } 
                  />

                  <p> submit: {this.props.value}</p>
                  
                </div>
                
            </div>
        )
            
        
    }
}

function mapStateToProps (state) {
    return {
      loginIn: state.loginReducer.loginIn,
      value: state.loginReducer.value,
      nameInput: state.loginReducer.nameInput,
      passInput: state.loginReducer.passInput,
      users: state.usersReducer.users,
      userId: state.loginReducer.userId

     

      
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      enterName: (log) => dispatch( enterName(log) ),
      enterPass: (pass) => dispatch( enterPass(pass) ),
      inLogNew: (log, pass, users) => dispatch( submitNew (log, pass, users) ),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (Login)