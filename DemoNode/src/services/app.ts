import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from "cors"
import {addNumRouter} from './controllers/addNum.controller';

//our Express App config

const app = express();

app.set("port",process.env.PORT || 3000);
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}));

 let corsOptions = {
    origin:['*'],
 }
 
 app.use(cors(corsOptions))

 app.get('/',(req,res)=>{
    res.send("Hi")
 });

 app.use("/",addNumRouter)

 export default app;