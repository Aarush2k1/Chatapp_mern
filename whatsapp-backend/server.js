//importing
import express from 'express';
import mongoose from 'mongoose'

//app config
const app = express()
const port = process.env.PORT || 9000;
//middleware

//DB config
const conn_url='mongodb+srv:chatapp_mern:mFbI7Fzqxr58GxoJ@cluster0.1xyzt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(url, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology: true
})
//

//api routes
app.get('/',(req,res) => res.status(200).send("hello"))
//listen
app.listen(port, () => console.log(`Listening on port ${port} `));