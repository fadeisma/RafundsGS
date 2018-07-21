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
        }

        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeCustomer = this.handleChangeCustomer.bind(this);
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
        axios.post('api/processData', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            user: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                addtionalCost: this.state.addtionalCost,
                transportationType: this.state.selectedOption.value,
                passengersNumber: this.state.Passengersnumber.value,
                area: this.state.Area.label,
                date: this.state.choosedDate
            }
        }).then(response => {
            this.notify();
            console.log(response, 'Signature added!');
        })
            .catch(err => {
                console.log(err, 'Signature not added, try again');
            });
    }
    handleChangeFirstName(firstName) {
        this.setState({ firstName: firstName })
    }
    handleChangeLastName(lastName) {
        this.setState({ lastName: lastName })
    }
    //
    handleChangeEmail(email) {
        this.setState({ email: email })
    }
    handleChangePassword(password) {
        this.setState({ password: password })
    }

    handleChangeCustomer(customer){
        this.setState({ customer: customer })
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
                <form>
                    <div>
                        <label>First Name:</label>
                        <input className='form-control' onChange={this.handleChangeFirstName} type="text" placeholder="Please insert Name" />
                    </div>

                    <div>
                        <label>Last Name:</label>
                        <input className='form-control' onChange={this.handleChangePassword} type="text" placeholder="Please insert LastName" />
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
                        <Select
                            options={departementOption} />
                    </div>
                    <button className='form-control btn btn-primary float-left' type="submit" >Register Now</button>
                </form>
            </div>

        )
    };
}

export default Register;