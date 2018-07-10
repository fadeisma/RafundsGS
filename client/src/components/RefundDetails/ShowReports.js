import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

class Report extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: []
        }
    }

    
    componentDidMount() {
        fetch('api/reportData')
            .then(res => res.json())
            .then(tableData => this.setState({ tableData }));
    }

    render() {
        console.log('this.state.tableData',this.state.tableData);
       let options =  this.state.tableData.map((trans) => ({
            date: trans.TranportationDate,
            type: trans.TranportationType,
            area : trans.TranportationArea,
            passengerNumber : trans.PssengersCost,
            addtionalCost : trans.AddtionalCost 
        
       }));
       console.log('options ' ,options)

        const columns = [ {
            dataField: 'date',
            text: 'Date'
          }, {
            dataField: 'type',
            text: 'Transportation Type'
          },{
            dataField: 'area',
            text: 'Areac Cost'
          }, {
            dataField: 'passengerNumber',
            text: 'Passengers Number'
          },{
            dataField: 'addtionalCost',
            text: 'Addtional'
          },];
        return (
            <BootstrapTable keyField='id' data={ options } columns={ columns } />

        );

    }
}
export default Report;