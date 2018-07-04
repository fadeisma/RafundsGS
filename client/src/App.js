import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import RefundDetails from './components/RefundDetails/refundDetails'
import Report from './components/RefundDetails/ShowReports'
class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      showReport: false
    }
    this.showReport = this.showReport.bind(this);
  }
  showReport(event) {
    event.preventDefault();
    this.setState({ showReport: !this.state.showReport });
  }

  render() {
    let report;
    if (this.state.showReport) {
      report = <div>
        <Report />
        <div>
          <button className="btn btn-success" onClick={this.showReport}>Switch </button>
        </div>
      </div>

    } else {
      report =
        <div>
          <RefundDetails />
          <div>
            <button className="btn btn-success" onClick={this.showReport} >Show report </button>
          </div>
        </div>
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Galil Refunds</h1>
        </header>
        <div className="container">

          {report}
        </div>

      </div>
    );
  }
}

export default App;
