import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Select from 'react-select';


class Login extends React.Component{


    changeEmail(event){

    }

    render(){
        return(
            <div>
                <label>Email :</label>
                    <input onChange = {this.changeEmail} className='form-control' placeholder ="Please insert valid Email" />

            </div>
        );

    }
}