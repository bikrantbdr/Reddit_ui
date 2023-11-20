import { useState } from "react";
import "./App.css"
const Comment = ({ comments, padding, handleInsertNode }) => {
    const [showReplies, setShowReplies] = useState(false);
    const [repliesInput, setRepliesInput] = useState(false);
    const [input, setInput] = useState('');

    // console.log("comments, index", comments);

    const toggleReplies = () => {
        setShowReplies(!showReplies);
    };
    const handleRepliesInput = () => {
        setRepliesInput(!repliesInput);

    };
    const handleReply = () => {
        handleInsertNode(comments.id, input);
        setInput('');
        setRepliesInput(false);
        setShowReplies(true);
    };


    return (
        <div className="commentSection">

            {comments.id === 1 ? (
                <div className="first_input">
                    <input
                        type="text"
                        className="inputTextfield"
                        autoFocus
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Comment..."
                    />
                    <button onClick={handleReply} className="postButton">Post</button>
                </div>
            ) : (
                <>
                    <div className="text">{comments.name}</div>
                    {repliesInput &&
                        <div className="replyInput" style={{ padding: `1rem 0.5rem 0.5rem ${padding - 10}px` }}>
                            <input type="text" onChange={(e) => { setInput(e.target.value) }} className="inputTextfield" placeholder="Your reply..." />
                            <button onClick={handleReply} className="postButton">Post</button>
                        </div>
                    }
                    <button onClick={handleRepliesInput} className="replyButton"
                        style={{ backgroundColor: repliesInput ? "#d54f4f" : "transparent", color: repliesInput ? "white" : "#777b77" }}
                    >
                        {repliesInput ? 'Cancel' : 'Reply'}
                    </button>
                    {comments.items.length > 0 && (
                        <button onClick={toggleReplies} className="showRepliesButton">
                            {showReplies ? 'Hide Replies' : 'Show Replies'}
                        </button>
                    )}
                </>
            )}
            { }
            {showReplies && comments.items.map((comment, index) => (
                <Comment key={index} comments={comment} padding={padding + 10} handleInsertNode={handleInsertNode} />
            ))}
        </div>
    );
};

export default Comment;