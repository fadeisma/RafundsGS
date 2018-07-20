import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component{


    render(){
        return(
            <div>
            <label>First Name:</label>
            <input className='form-control' type="text"  placeholder="Please insert Name" />
            <label>Last Name:</label>
            <input className='form-control' type="text"  placeholder="Please insert LastName" />
            
            <h1>I am in Register Page</h1>
            </div>
        )
    };
}

export default Register;