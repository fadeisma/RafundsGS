import React from 'react';

class Report extends React.Component {

    constructor(props){
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

    render(){
        console.log(this.state.tableData);
        return (
            <div>
            </div>

        );

    }
}
export default Report;