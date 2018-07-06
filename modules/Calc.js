var os = require('os');
var fs = require('fs');
var tranportationcCarArea = require('../staitcInfo/TranportationCarArea')
var passengersCost = require('../staitcInfo/PasengersConst');
var TransportationRefund = require('../db/TransportationRefund');

exports.getRequest = (data) => {
    // in case car was choosed from client side.
    if (data.transportationType === 'Car') {
        var areaCost = tranportationcCarArea.TranportationCarArea.find((area) => {
            return area.transportationArea === data.area;
        });
        var passCostclient = passengersCost.PassengersCost.find((passCost) => {
            return passCost.id == data.passengersNumber;
        });
        // 

        var tranportationRefund = new TransportationRefund({
            TranportationDate: data.date,
            TranportationType: data.transportationType,
            TranportationArea: areaCost.cost,
            PssengersCost: passCostclient.cost,
            AddtionalCost: data.addtionalCost,
            TotlaCost: Number(passCostclient.cost) + Number(data.addtionalCost) + Number(areaCost.cost)
        })
        // insertion to database
        tranportationRefund.save((err) => {if (err) console.log('err ', err) });
        console.log('date =', data.date);
        console.log('data.transportationType =', data.transportationType);
        console.log('areaCost =', areaCost.cost);
        console.log('passengersCost =', passCostclient.cost);
        console.log('AddtionalCost =', data.addtionalCost);
        console.log('TotlaCost =', Number(passCostclient.cost) + Number(data.addtionalCost) + Number(areaCost.cost));


    }


}