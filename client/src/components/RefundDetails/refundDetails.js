import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios';

import 'react-select/dist/react-select.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';


class RefundDetails extends Component {

    notify = () => {
        
        toast.info("Updated Successfully", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        }
    constructor(props) {
        super(props);
        this.state = {
            trasnportation: [],
            transportationCost: '',
            addtionalCost: '',
            selectedOption: '',
            Passengersnumber: '',
            show: false,
            choosedDate : moment()
        };

        this.handleChangeAddtionalCost = this.handleChangeAddtionalCost.bind(this);
        this.handleChangeSelectTransporation = this.handleChangeSelectTransporation.bind(this);
        this.handleChangeOfTransposrationsCost = this.handleChangeOfTransposrationsCost.bind(this);
        this.handleChangePassengers = this.handleChangePassengers.bind(this);
        this.handleChangeOfSelectedDate = this.handleChangeOfSelectedDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeSelectTransporation(newvalue) {
        this.setState({ selectedOption: newvalue });
        if (newvalue === null || newvalue === false )
            return;
        if ( newvalue.value === 'Car') {
            this.setState({ show: true });

        } else {
            this.setState({ show: false });

        }
    }


    componentDidMount() {
        fetch('api/transporationTypes')
            .then(res => res.json())
            .then(trasnportation => this.setState({ trasnportation }));
    }

    handleChangePassengers(passNumber) {
        this.setState({ Passengersnumber: passNumber });
    }

    handleChangeOfTransposrationsCost(event) {
        this.setState({ transportationCost: event.target.value });
    }

    handleChangeAddtionalCost(event) {
        this.setState({ addtionalCost: event.target.value });

    }
    handleChangeOfSelectedDate(date){
        this.setState({choosedDate : date })
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('api/processData', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            trasnporationDetails: {
                transportationCost: this.state.transportationCost,
                addtionalCost: this.state.addtionalCost,
                transportationType: this.state.selectedOption.value,
                passengersNumber: this.state.Passengersnumber,
                date : this.state.choosedDate
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
        let optionItems = this.state.trasnportation.map((trans) => ({
            value:
                `${trans.TransportationType}`, label: `${trans.TransportationType}`
        }));
        let PassegersArray = [{ value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' }
        ];
        let PassengersNum;
        if (this.state.show) {
            PassengersNum = <div> <label className='text-left'>Passengers Number</label>
                <Select value={this.state.Passengersnumber} onChange={this.handleChangePassengers}
                    options={PassegersArray} />
            </div>
        }
        return (
            <div >
                <div className="container">
                    <form className='form-group' onSubmit={this.handleSubmit}>
                        <div>
                            <label>Choose Date :</label>
                            <DatePicker  className='form-control'  selected={this.state.choosedDate} onChange={this.handleChangeOfSelectedDate} />
                        </div>
                        <div >
                            <label className='text-left'>Transportation Type:</label>
                            <Select value={this.state.selectedOption}
                                onChange={this.handleChangeSelectTransporation} options={optionItems} />
                        </div>
                        {PassengersNum}
                        <div >
                            <label className='text-left' >Cost : </label>
                            <input className='form-control' type="text" name="transportationCost" value={this.state.transportationCost}
                                onChange={this.handleChangeOfTransposrationsCost} placeholder="please insert cost" />
                        </div>
                        <div>
                            <label className='text-left' >AddtionalCost : </label>
                            <input className='form-control' type="text" name="addtionalCost" value={this.state.addtionalCost}
                                onChange={this.handleChangeAddtionalCost} placeholder="please insert cost  " />
                        </div>
                        <div className="SubmitButton">
                            <button  className='form-control btn btn-primary float-left' type="submit" >Add Event</button>
                            <ToastContainer />
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default RefundDetails;


