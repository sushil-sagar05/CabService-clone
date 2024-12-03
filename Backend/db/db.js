const mongoose = require('mongoose');


function connectdb(){
mongoose.connect(process.env.DB_CONNECT,
    console.log('Connected to Database')) 
    .catch(err => console.log(err)) ;

}
module.exports = connectdb