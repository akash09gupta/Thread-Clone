const express = require("express"); //importing express class
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const router = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();//helps in running dotenv file
const app = express();//creating instance of express for using its methods
connectDB();//calling database to connect

app.use(cors({
    origin:' http://localhost:5173',
    credentials:true
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log('App is listening on PORT :',port);
});//creating port