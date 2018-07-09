import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Select from 'react-select';


class Login extends React.Component{

    constructor(props){
        super(props)
        this.state  = {
            email : ''
        }
    }

    changeEmail(event){


    }

    render(){
        return(
            <div>
                <label>Email :</label>
                    <input  type="text" onChange = {this.changeEmail} className='form-control' placeholder ="Please insert valid Email" />

            </div>
        );

    }
}