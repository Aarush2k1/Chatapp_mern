import React, { useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "../../axios";

function Chat({ messages }) {
  const [input, setInput] = useState([]);
  const sendMsg = (e) => {
    e.preventDefault();

    axios.post("/messages/new", {
      message: input,
      name: "demo user",
      timestamp: "just now",
      reciever: false,
    });
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src="https://avatars.dicebear.com/4.5/api/male/.svg" />
        <div className="chat_headerInfo">
          <h3>Name</h3>
          <p>Last seen {new Date().toUTCString()}</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        {messages.map((msg) => (
          <p className={`chat_message ${msg.reciever && "chat_reciever"}`}>
            <span className="chat_name">{msg.name}</span>
            {msg.message}
            <span className="chat_time">{msg.timestamp}</span>
          </p>
        ))}

        {/* <p className="chat_message chat_reciever">
                    <span className="chat_name">name</span>
                    This is message
                    <span className="chat_time">{new Date().toUTCString()}</span>
                </p>   */}
      </div>
      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          ></input>
          <button onClick={sendMsg} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
