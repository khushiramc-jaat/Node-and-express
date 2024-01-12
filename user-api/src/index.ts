import  express  from "express";
import bodyParser from 'body-parser'
import userRouter from "./routes.ts/Users";

const app = express();
app.use(bodyParser.json());
app.use('/users',userRouter);

const PORT =3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});