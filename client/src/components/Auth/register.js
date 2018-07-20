import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            departements: []

        }
    }
    componentDidMount() {
        fetch('api/user/GalilCustomers')
            .then(res => res.json())
            .then(customers => this.setState({ customers }));

        fetch('api/user/GalilDepartement')
            .then(res => res.json())
            .then(departements => this.setState({ departements }));



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
            <div>
                <label>First Name:</label>
                <input className='form-control' type="text" placeholder="Please insert Name" />
                <label>Last Name:</label>
                <input className='form-control' type="text" placeholder="Please insert LastName" />
                <Select value={this.state.Passengersnumber} onChange={this.handleChangePassengers}
                    options={custoemrsOption} />
                <Select value={this.state.Passengersnumber} onChange={this.handleChangePassengers}
                    options={departementOption} />
                <h1>I am in Register Page</h1>
            </div>
        )
    };
}

export default Register;