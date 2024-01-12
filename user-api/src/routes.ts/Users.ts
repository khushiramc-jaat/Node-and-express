import  * as Express   from 'express';
import { Response,Request } from 'express';
import * as fs from 'fs';
import { User } from '../models/Users';
import { fileURLToPath } from 'url';

const router = Express.Router();
const userFilePath = './users.json';
// GET all users
router.get('/',(req:Request,res:Response)=>{
    const users = JSON.parse(fs.readFileSync(userFilePath,'utf-8'));
    res.json(users);
});

//GET user by email

router.get('/:email',(req:Request,res:Response)=>{
    const email = req.params.email ;
    const users:User[] = JSON.parse(fs.readFileSync(userFilePath,'utf-8'));
    const user = users.find((u)=>u.email===email);
    if(!user){
        return res.status(404).json({message:'User not found'});
    }
    res.json(user);
});

// POST create user
router.post('/',(req:Request,res:Response)=>{
    const newUser:User=req.body;
    const users:User[]=JSON.parse(fs.readFileSync(userFilePath,'utf-8'));
    users.push(newUser);
    fs.writeFileSync(userFilePath,JSON.stringify(users,null,2));
    res.status(201).json(newUser);

});

// PUT update user by email
router.put('/:email',(req:Request,res:Response)=>{
    const email=req.params.email;
    const updatedUser:User=req.body;
     const users:User[]=JSON.parse(fs.readFileSync(userFilePath,'utf-8'));
     const index =users.findIndex((u)=>u.email===email);
     if(index===-1){
        return res.status(404).json({message:'user not found'})
     }
     users[index] = updatedUser;
     fs.writeFileSync(userFilePath,JSON.stringify(users,null,2));
     res.json(updatedUser);
});

//DELETE user by email

router.delete('/:email',(req:Request,res:Response)=>{
    const email=req.params.email;
    let users:User[]=JSON.parse(fs.readFileSync(userFilePath,'utf-8'));
    users=users.filter((user)=>user.email !=email);
    fs.writeFileSync(userFilePath,JSON.stringify(users,null,2));
    res.json({message:"User deleted successfully"});
});

export default router;

