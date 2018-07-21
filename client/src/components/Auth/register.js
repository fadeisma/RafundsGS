import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            departements: [],
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            customer: '',
            galilDepartment: ''
        };

        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        // this.handleChangeEmail = this.handleChangeEmail.bind(this);
        // this.handleChangePassword = this.handleChangePassword.bind(this);
        // this.handleChangeCustomer = this.handleChangeCustomer.bind(this);
        // this.handleChangeDepartment = this.handleChangeDepartment.bind(this);


    }


    componentDidMount() {
        fetch('api/user/GalilCustomers')
            .then(res => res.json())
            .then(customers => this.setState({ customers }));

        fetch('api/user/GalilDepartement')
            .then(res => res.json())
            .then(departements => this.setState({ departements }));



    }
    handleSubmit(event) {
      
        event.preventDefault();
        
        console.log("firstName ",   this.state.firstName);
        axios.post('api/user/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            user: {
                FirstName: this.state.firstName,
             
               
            }
        }).then(response => {
            this.notify();
            console.log(response, 'Signature added!');
        })
            .catch(err => {
                console.log(err, 'Signature not added, try again');
            });
    }
    handleChangeFirstName(event) {
        this.setState({ firstName: event.target.value });
        
    }
    handleChangeLastName(event) {
        this.setState({ lastName: event.target.value });
    }
    //
    handleChangeEmail(email) {
        this.setState({ email: email });
    }
    handleChangePassword(password) {
        this.setState({ password: password });
    }

    handleChangeCustomer(customer){
        this.setState({ customer: customer });
    }
    handleChangeDepartment(dep){
        this.setState({ galilDepartment: dep });
    }

    render() {
        let custoemrsOption = this.state.customers.map((cus) => ({
            value:
                `${cus.id}`, label: `${cus.name}`
        }));
        let departementOption = this.state.departements.map((dep) => ({
            value:
                `${dep.id}`, label: `${dep.name}`
        }));
        return (
            <div className="container">
                <form className='form-group' onSubmit={this.handleSubmit}>
                    <div>
                        <label>First Name:</label>
                        <input className='form-control'
                         onChange={this.handleChangeFirstName} type="text" placeholder="Please insert Name" />
                    </div>

                    <div>
                        <label>Last Name:</label>
                        <input className='form-control' onChange={this.handleChangeLastName} type="text" placeholder="Please insert LastName" />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input className='form-control' onChange={this.handleChangeEmail} type="text" placeholder="Please insert Galil's Email" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input className='form-control' onChange={this.handleChangePassword} type="password" placeholder="Please insert Galil's Email" />
                    </div>

                    <div>
                        <label>Cutomer: </label>
                        <Select options={custoemrsOption} value={this.state.customer} onChange={this.handleChangeCustomer}/>
                    </div>
                    <div>
                        <label> Department :</label>
                        <Select options={departementOption} value={this.state.galilDepartment} onChange={this.handleChangeDepartment} />
                    </div>
                    <button className='form-control btn btn-primary float-left' type="submit" >Register Now</button>
                </form>
            </div>

        )
    };
}

export default Register;