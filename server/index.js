import express from "express";

import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import mongoose from "mongoose";
import dotenv from "dotenv";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


// data imports
import User from './models/User.js';
import  {datauser} from './data/index.js'


// app.get('/' , (req, res)=>{
//     res.send('Hello World')
// })
// app.listen(3000);


/* MONGOOSE SETUP */
// console.log("connected");
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    User.insertMany(datauser);
  })
  .catch((error) => console.log(`${error} did not connect`));
