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
            transportationArea: [],
            passengersCost: [],
            transportationCost: '',
            addtionalCost: '',
            selectedOption: '',
            Passengersnumber: -1,
            Area: '',
            showPassengers: false,
            choosedDate: moment(),
            count: 0
        };

        this.handleChangeAddtionalCost = this.handleChangeAddtionalCost.bind(this);
        this.handleChangeSelectTransporation = this.handleChangeSelectTransporation.bind(this);
        this.handleChangeOfTransposrationsCost = this.handleChangeOfTransposrationsCost.bind(this);
        this.handleChangePassengers = this.handleChangePassengers.bind(this);
        this.handleChangeArea = this.handleChangeArea.bind(this);
        this.handleChangeOfSelectedDate = this.handleChangeOfSelectedDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeSelectTransporation(newvalue) {

        this.setState({ selectedOption: newvalue });
        if (newvalue === null || newvalue === false)
            return;
        if (newvalue.value === 'Car') {
            this.setState({ showPassengers: true });

        } else {
            this.setState({ showPassengers: false });

        }
        if (newvalue.value) {
            this.setState({ count: 1 })
        }
    }


    componentDidMount() {
        fetch('api/transporationTypes')
            .then(res => res.json())
            .then(trasnportation => this.setState({ trasnportation }));

        fetch('api/transportationArea')
            .then(res => res.json())
            .then(transportationArea => {
                this.setState({ transportationArea })
            });
        fetch('api/transporationPassengers')
            .then(res => res.json())
            .then(passengersCost => {
                this.setState({ passengersCost })
            });


    }

    handleChangePassengers(passNumber) {
        this.setState({ Passengersnumber: passNumber });
    }

    handleChangeArea(area) {
        this.setState({ Area: area });
    }
    handleChangeOfTransposrationsCost(event) {
        this.setState({ transportationCost: event.target.value });
    }

    handleChangeAddtionalCost(event) {
        this.setState({ addtionalCost: event.target.value });

    }
    handleChangeOfSelectedDate(date) {
        this.setState({ choosedDate: date })
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

    render() {
        let optionItems = this.state.trasnportation.map((trans) => ({
            value:
                `${trans.TransportationType}`, label: `${trans.TransportationType}`
        }));
        let areaArray = this.state.transportationArea.map((area) => ({
            value: `${area.id}`, label: `${area.transportationArea}`
        }));
        let passengerArray = this.state.passengersCost.map((cost) => ({
            value: `${cost.id}`, label: `${cost.id}`
        }));

        //passengers Number
    
        // let AreaArray = [{ value: '1', label: 'Telviv' },
        // { value: '2', label: 'Haifa' },
        // { value: '3', label: 'Nazareth' },
        // { value: '4', label: 'Afula' }
        // ];
        let PassengersNum;
        if (this.state.showPassengers && this.state.count == 1) {
            PassengersNum = <div><div> <label className='text-left'>Passengers Number :</label>
                <Select value={this.state.Passengersnumber} onChange={this.handleChangePassengers}
                    options={passengerArray} />
            </div>
                <div> <label className='text-left'>Choose Area :</label>
                    <Select value={this.state.Area} onChange={this.handleChangeArea}
                        options={areaArray} />
                </div>
            </div>
        } else if (this.state.count == 1) {
            PassengersNum = <div >
                <label className='text-left' >Cost : </label>
                <input className='form-control' type="text" name="transportationCost" value={this.state.transportationCost}
                    onChange={this.handleChangeOfTransposrationsCost} placeholder="please insert cost" />
            </div>
        }
        return (
            <div >
                <div className="container">
                    <form className='form-group' onSubmit={this.handleSubmit}>
                        <div>
                            <label>Choose Date :</label>
                            <DatePicker className='form-control' selected={this.state.choosedDate} onChange={this.handleChangeOfSelectedDate} />
                        </div>
                        <div >
                            <label className='text-left'>Transportation Type:</label>
                            <Select value={this.state.selectedOption}
                                onChange={this.handleChangeSelectTransporation} options={optionItems} />
                        </div>
                        {PassengersNum}

                        <div>
                            <label className='text-left' >AddtionalCost : </label>
                            <input className='form-control' type="text" name="addtionalCost" value={this.state.addtionalCost}
                                onChange={this.handleChangeAddtionalCost} placeholder="please insert cost  " />
                        </div>
                        <div className="SubmitButton">
                            <button className='form-control btn btn-primary float-left' type="submit" >Add Event</button>
                            <ToastContainer />
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default RefundDetails;


