import { useState } from "react";
import "./App.css"
const Comment = ({ comment, onReply,index,padding }) => {
    const [showReplies, setShowReplies] = useState(false);
    const [repliesInput, setRepliesInput] = useState(false);
    const [reply, setReply] = useState('');

    // console.log("comment, index", comment);

    const toggleReplies = () => {
        setShowReplies(!showReplies);
    };
    const handleRepliesInput = () => {
        setRepliesInput(!repliesInput);

    };
    const handleReply = () => {
        if (reply !== '') {
            onReply(reply,index);
            setReply('');
            setRepliesInput(false);
            setShowReplies(true);
        }
    };

    return (
        <div className="commentSection" style={{padding:`1rem 0.5rem 0.5rem ${padding}px`}}>
            <div className="text">{comment.text}</div>
            {repliesInput &&
                <div className="replyInput">
                    <input type="text" onChange={(e) => { setReply(e.target.value) }} className="inputTextfield" />
                    <button onClick={handleReply} className="postButton">Post</button>
                </div>
            }
            <button onClick={handleRepliesInput} className="replyButton" 
                style={{ backgroundColor: repliesInput ? "#d54f4f" : "transparent", color: repliesInput ? "white" : "#777b77"}}
            >
                {repliesInput ? 'Cancel' : 'Reply'}
            </button>
            {comment.replies && (
                <button onClick={toggleReplies} className="showRepliesButton">
                    {showReplies ? 'Hide Replies' : 'Show Replies'}
                </button>
            )}
            {showReplies &&
                comment.replies.map((reply, index) => (
                    <Comment key={index} comment={reply} index={index} padding={padding+20} onReply={(newReply) => onReply(newReply, index)} />
                ))}
        </div>
    );
};

export default Comment;