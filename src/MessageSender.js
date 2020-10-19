import { Avatar } from '@material-ui/core'
import React,{useState} from 'react'
import "./MessageSender.css"
import VideoCallIcon from '@material-ui/icons/VideoCall';
import { InsertEmoticon, PhotoLibrary } from '@material-ui/icons';
import {useStateValue} from "./StateProvider"

function MessageSender() {
    const [input,setInput] = useState('');
    const [{user},dispatch]= useStateValue();

    const [imageUrl,setImageUrl] = useState('');
 

    const handleSubmit = (e)=>{
        e.preventDefault();
        setInput("");
        setImageUrl("");
    }
 
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURl}/>
                <form>
                        <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder={`Whats on your mind, ${user.displayName}`} className="messageSender__input"/>
                        <input type={imageUrl}  onChange={(e)=>setImageUrl(e.target.value)}  placeholder="image URL {Optional}" className="messageSender__input"/>
                        <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideoCallIcon style={{ color:"red" }}/>
                    <h3>Live Now</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibrary style={{ color:"green" }}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticon style={{ color:"orange" }}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
