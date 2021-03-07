import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import "./SidebarChat.css";

function SidebarChat({addNewChat}) {
    const [seed,setSeed] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random()*500));
        
    }, []);

    const creatChat = () => {
        const chat_name=prompt("Please Enter Name of Chat");
        if(chat_name){
            //from database
        }
    };

    return !addNewChat? (
        <div className="sidebarChat">      
        <Avatar src={`https://avatars.dicebear.com/4.5/api/human/${seed}.svg`}/>  
        <div className="sidebarChat_info">
            <h2>Name</h2>
            <p>Message</p>
        </div>
        </div>
    ) : (
        <div onClick={creatChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>    
    );
}

export default SidebarChat
