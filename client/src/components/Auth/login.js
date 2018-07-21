import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {


    handleSubmit(event) {
        event.preventDefault();
        axios.post('/api/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            user:{
                userName : 'fadeisma@gmail.com',
                password : 'fuck this world'
            }
        }).then(response => {
            this.notify();
            console.log(response, 'Signature added!');
        })
            .catch(err => {
                console.log(err, 'Signature not added, try again');
            });
    }

    render() {
        return (
            <div className ='container'>
            <form className='form-group' onSubmit={this.handleSubmit}>
                <div>
                    <label>Email :</label>
                    <input className='form-control' type="text"  placeholder="Please insert valid Email" />
                    <label> Password : </label>
                    <input className='form-control' type="password" placeholder="Please insert password" />
                </div>
                
                            <button className='form-control btn btn-primary float-left' type="submit" >Login</button>
                            
                   
            </form>

            </div>
        );

    }
}

export default Login;