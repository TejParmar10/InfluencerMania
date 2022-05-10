const express=require('express');
const connectDB=require('./DB/Connection');
const app=express();
const Port=process.env.Port||3000;
connectDB();
app.use(express.json({extended: false}))
app.use('/api/userModel',require('./Api/User'));
app.listen(Port,()=>console.log('Server started'));