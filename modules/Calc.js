var os = require('os');
var fs = require('fs');
var tranportationcCarArea = require('../staitcInfo/TranportationCarArea')
let trasnformationDetails = {}

//do Calculation of data 
const FolderName = "/Documents/GalilRefuds/";
exports.getRequest = (data) =>{
    console.log('data',data )
    if (data.transportationType === 'Car'){
        console.log('tranportationcCarArea' ,tranportationcCarArea)
        var element = tranportationcCarArea.TranportationCarArea.find((area) =>{ 
            console.log('area ', area);
            return area.transportationArea ===  data.area;
        });
    }
   // console.log('tranportationcCarArea' ,tranportationcCarArea.TranportationCarArea.TelAviv);
   // console.log(data.trasnporationDetails.Trran)
 
}