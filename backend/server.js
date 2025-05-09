require('dotenv').config();
const express=require('express');
const app = express();
const cors=require("cors")
const router=require('./router/auth-router')
const connectDB=require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');
const conatctRoute=require("./router/contact-router")
const serviceRoute=require("./router/service-router")
const adminRoute=require("./router/admin-router")
const path=require("path")

const _dirname=path.resolve();
const corsOptions = {
    origin: ["http://localhost:5173", "http://localhost:5175"], // Allow both ports
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
    exposedHeaders: ['Authorization']
  };
  
  app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/auth',router)
app.use('/api/form',conatctRoute)
app.use('/api/data',serviceRoute)
app.use('/api/admin',adminRoute)
app.use(express.static(path.join(_dirname,"/client/dist")))
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,"client","dist","index.html"))
})
const port=process.env.PORT || 5000;

app.use(errorMiddleware)

connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`)
    })
})
