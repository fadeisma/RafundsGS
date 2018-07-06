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

        var products = [{
            id: 1,
            name: "Product1",
            price: 120
        }, {
            id: 2,
            name: "Product2",
            price: 80
        }];
        const columns = [{
            dataField: 'id',
            text: 'Transportation ID'
          }, {
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
            <BootstrapTable keyField='id' data={ products } columns={ columns } />

        );

    }
}
export default Report;