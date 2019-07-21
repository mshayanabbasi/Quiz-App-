import React, { Component } from 'react';
import Input from '../Input/Input';
import './Login.css'

class Login extends Component {
    state = { 
        users: [
            {id:0, name:'admin', pass: 'admin'},
            {id:1, name:'shayan', pass: 'shayan'},
            {id:2, name:'arif', pass: 'arif'},
          ],
          isAuth: false,
          currentUser: null,
          errors: {
              hasError: false,
              errorObj: {},
              serverError: ""
          },
          name: "",
          pass: ""
     }
     validate = () => {
         const { name, pass, errors } = this.state
         if(name.length > 3) {
             errors.hasError = true
             errors.errorObj["name"] ? 
             errors.errorObj["name"] = {message: "Name Can't Be Less Then 4 Characters"} :
             errors.errorObj["name"].message += "Name Can't Be Less Then 4 Characters"
         }
         return errors.hasError ? errors : {
             hasError: false,
             errorObj: {},
             serverError: ""
         }
     }
     onSubmit = (event) => {
        event.preventDefault()
        const { users, errors, name, pass } = this.state
        var currentUser = users.filter((user) => {
            return user.name === name && user.pass === pass
        })    
        if(currentUser.length) {
            localStorage.setItem("currentUser", JSON.stringify(currentUser[0]))
        }
        else {
            errors.serverError = "Wrong Credentials"
            this.setState({ errors })
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
                        onChange={(event) => this.setState({[event.target.name]: event.target.value})}
                        errors={errors}
                    />
                    <Input 
                        type="password"
                        value={pass}
                        id="pass"
                        name="pass"
                        label="Password"
                        placeholder="Enter Your Password"
                        onChange={(event) => this.setState({[event.target.name]: event.target.value})}
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
