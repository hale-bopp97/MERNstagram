const mongoose = require("mongoose");

const connectDB = async () => {
    
    console.log(`MONGO_URI: ${process.env.MONGO_URI}`);
    
    try {

        const conn = await mongoose.connect(process.env.MONGO_URI);
        
        console.log(`Connected to MongoDB: ${conn.connection.host}`);
    
    } catch (err) {

        console.log("DB connection error: ", err);
        process.exit(1);

    }

};

module.exports = connectDB;