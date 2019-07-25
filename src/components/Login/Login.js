import React, { Component } from 'react';
import Input from '../Input/Input';
import './Login.css'
import {validateForm} from './helper'

class Login extends Component {
    state = {
        users: [
            {id:0, name:'admin', pass: 'admin'},
            {id:1, name:'shayan', pass: '12345678'},
            {id:2, name:'arif', pass: 'arif'},
          ],
          isAuth: false,
          currentUser: null,
          errors: {
              hasError: false,
              errorsObj: {},
              serverError: ""
          },
          name: "",
          pass: ""
     }
     onChange = (event) => {
       const { errors, name, pass } = this.state
      this.setState({
        [event.target.name]: event.target.value,
        errors: validateForm("each", {name, pass}, event.target.name, errors)
      })
     }
    // validate = () => {
    //   const  { name, pass } = this.state
    //   const errors = {
    //     hasError: false,
    //     errorsObj: {},
    //     serverError: ""
    //   }
    //   if (name.length < 3) {
    //     errors.hasError = true
    //     errors.errorsObj["name"] ?
    //       errors.errorsObj["name"].message += `` :
    //       errors.errorsObj["name"] = { message: ` Name Can't Be Less Than 4 Charachters \n`}
    //   }
    //   return  errors;
    // }
     onSubmit = (event) => {
        event.preventDefault()
        const { users, errors, name, pass } = this.state
        this.setState({
          errors: {
            hasError: false,
            errorsObj: {},
            serverError: ""
          }
        })
        // console.log(errors);
        const validate = validateForm("all", { name, pass })
        // console.log(validate);
        if (validate.hasError) {
          this.setState({
            errors: validate
          })
          return ;
        }
        var currentUser = users.filter((user) => {
            return user.name === name && user.pass === pass
        })
        if(currentUser.length) {
            localStorage.setItem("currentUser", JSON.stringify(currentUser[0]))
            this.props.history.push({pathname: "/dashboard", state : {isAuth: true}})
        }
        else {
            errors.serverError = "Wrong Credentials"
            this.setState({ errors })
            return ;
        }
    }
    render() {
        const { name, errors, pass } = this.state
        return (
            <div>
                <div className="login-form-wrapper">
                <form onSubmit={(event) => this.onSubmit(event)}>
                    <h1>Login</h1>
                    {errors.serverError && <p><strong className="error">{errors.serverError}</strong></p>}
                    <Input
                        type="text"
                        value={name}
                        id="name"
                        name="name"
                        label="UserName"
                        placeholder="Enter Your Name"
                        onChange={(event) => this.onChange(event)}
                        errors={errors}
                    />
                    <Input
                        type="password"
                        value={pass}
                        id="pass"
                        name="pass"
                        label="Password"
                        placeholder="Enter Your Password"
                        onChange={(event) => this.onChange(event)}
                        errors={errors}
                    />
                    <Input
                        type="submit"
                        value="Login"
                        id="my-btn-login"
                        name="my-btn"
                    />
                </form>
                </div>
            </div>
         );
    }
}

export default Login;
