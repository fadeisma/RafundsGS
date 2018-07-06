var os = require('os');
var fs = require('fs');
var tranportationcCarArea = require('../staitcInfo/TranportationCarArea')
var passengersCost = require('../staitcInfo/PasengersConst')
let trasnformationDetails = {}

exports.getRequest = (data) =>{
    if (data.transportationType === 'Car'){
        var element = tranportationcCarArea.TranportationCarArea.find((area) =>{ 
            return area.transportationArea ===  data.area;
        });
      
        var currentPassenger = passengersCost.PassengersCost.find((passCost) =>{ 
            return passCost.id ==  data.passengersNumber;
        });

    }
   // console.log('tranportationcCarArea' ,tranportationcCarArea.TranportationCarArea.TelAviv);
   // console.log(data.trasnporationDetails.Trran)
 
}