import  Express  from "express";



const app = Express();
const PORT=3000
//app.set("port",PORT);

app.get("/express",(req,res)=>{
    res.send("hi i am khushiram")
})


app.listen(PORT,()=>{
    console.log(`server is start port number is: ${PORT}`)
});