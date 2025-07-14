const mongoose = require('mongoose');

const url = "mongodb://host.docker.internal:27017/usersmsgcollections"
const connectDB = async ()=>{
        await mongoose.connect(url)
        .then((res)=>{
                console.log(res)
        })
        .catch((err)=>{
                console.log(err)
        })
}
module.exports = connectDB