var os = require('os');
var fs = require('fs');
let trasnformationDetails = {}


const FolderName = "/Documents/GalilRefuds/";
exports.getRequest = (data) =>{
    var home = os.homedir();
    console.log('home' ,home);
    var fileName = data.trasnporationDetails.date;
    console.log('fileName ' , fileName);
    if (fileName){
        if (fs.exists){

        }

    } 
    
    trasnformationDetails = data.trasnporationDetails;
    console.log('Data' , trasnformationDetails.transportationType);
}