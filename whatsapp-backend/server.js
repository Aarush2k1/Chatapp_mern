//importing
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbmessages';
import Pusher from 'pusher'

//app config
const app = express()
const port = process.env.PORT || 9000;
const pusher = new Pusher({
    appId: "1128614",
    key: "7d4a27394e6e28bf4555",
    secret: "542a92d74210a8c29fd7",
    cluster: "ap2",
    useTLS: true
  });


//middleware
app.use(express.json());

//DB config
const conn_url='mongodb+srv:chatapp_mern:mFbI7Fzqxr58GxoJ@cluster0.1xyzt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(conn_url, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology: true
})
//

//api routes
app.get('/',(req,res) => res.status(200).send("hello"))

app.get('/messages/sync',(req,res)=>{   
    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

app.get('/messages/new',(req,res)=>{
    const dbMessage = req.body
    Messages.create(dbMessage,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})
//listen
app.listen(port, () => console.log(`Listening on port ${port} `));