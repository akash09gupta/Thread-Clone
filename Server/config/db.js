const mongoose = require("mongoose");//importing mongoose

const connectDB = async () => {//using async for connecting the remote server
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
}

module.exports = connectDB;//exporting our fat arrow func like in react js