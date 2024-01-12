import * as express from 'express';
import { Request,Response } from 'express';

// import {addTwoNumbers} from '../services/addNum.service';

export const addNumRouter = express.Router();

// mamke end point here


addNumRouter.post("/add/",(req:Request,res:Response)=>{
    const num1=req.body.num1;
    const num2 = req.body.num2;
    const result = num1+num2;
    res.json(JSON.stringify({result:3}));
})