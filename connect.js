const mongoose = require('mongoose');





const connectDB = (URI) =>{
    return mongoose.connect(URI)
           .then(() => console.log('Database connected'))
           .catch((err) => console.log(err))

}



module.exports = connectDB;