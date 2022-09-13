const mongoose = require("mongoose")

function connectDB() {
    mongoose.connect('mongodb+srv://keyur:shivam6503@cluster0.i4g2zxy.mongodb.net/sheycar-keyur', { useUnifiedTopology: true, useNewUrlParser: true })

    const connection = mongoose.connection

    connection.on('connected', () => {
        console.log("GS");
    })

    connection.on('error', () => {
        console.log("E");
    })
}
connectDB()

module.exports = mongoose