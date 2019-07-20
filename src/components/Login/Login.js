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
              errorObj: {}
          },
          name: "",
          pass: ""
     }
     onSubmit = (event) => {
        event.preventDefault()
        const { users, errors, name, pass } = this.state
     }
    render() { 
        const { name, errors, pass } = this.state
        return ( 
            <div>
                <div className="login-form-wrapper">
                <form onSubmit={(event) => this.onSubmit(event)}>
                    <h1>Login</h1>
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
