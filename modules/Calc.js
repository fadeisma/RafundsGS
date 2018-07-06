var os = require('os');
var fs = require('fs');
var tranportationcCarArea = require('../staitcInfo/TranportationCarArea')
var passengersCost = require('../staitcInfo/PasengersConst')
let trasnformationDetails = {}

exports.getRequest = (data) =>{
    // in case car was choosed from client side.
    if (data.transportationType === 'Car'){
        var areaCost = tranportationcCarArea.TranportationCarArea.find((area) =>{ 
            return area.transportationArea ===  data.area;
        });
        var passCostclient = passengersCost.PassengersCost.find((passCost) =>{ 
            return passCost.id ==  data.passengersNumber;
        });
        // 
        console.log('date =' , data.date );
        console.log('data.transportationType =' , data.transportationType );
        console.log('areaCost =' , areaCost.cost );
        console.log('passengersCost =' , passCostclient.cost );
        console.log('AddtionalCost =' , data.addtionalCost );
        console.log(Number(passCostclient.cost)+ Number(data.addtionalCost)  + Number(areaCost.cost))

    }
    
 
}