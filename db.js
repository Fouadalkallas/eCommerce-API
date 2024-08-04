const mongoose= require('mongoose');

const conn=()=>{
    mongoose.connect(process.env.mongoUrl).then(()=>{
        console.log('connected to db');
      });
};
module.exports=conn;

