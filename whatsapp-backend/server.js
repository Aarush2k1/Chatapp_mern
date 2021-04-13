//importing
import express from "express";
import mongoose from "mongoose";
import Pusher from "pusher";
import dotenv from "dotenv";
import cors from "cors";
import msgRoutes from "./routes/messages.js";

//app config
const app = express();
dotenv.config();
const port = process.env.PORT || 9000;
const pusher = new Pusher({
  appId: "1128614",
  key: "7d4a27394e6e28bf4555",
  secret: "542a92d74210a8c29fd7",
  cluster: "ap2",
  useTLS: true,
});

//middleware
app.use(express.json());
app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   next();
// }); instead of this use cors
//api routes in routes
app.use("/messages", msgRoutes);
app.get("/", (req, res) => {
  res.send("WELCOME TO CHATAPP API");
});

//DB config
mongoose.connect(process.env.CONN_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("DB Connected");
  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log(change);
    if (change.operationType == "insert") {
      const msgDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: msgDetails.user,
        message: msgDetails.message,
        timestamp: msgDetails.timestamp,
        reciever: msgDetails.reciever,
      });
    } else {
      console.log("Error triggering pusher");
    }
  });
});
//listen
app.listen(port, () => console.log(`Listening on port ${port} `));
