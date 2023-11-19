import { useState,useEffect } from 'react';
import Comment from './Comment';


const App = () => {
  const [comments, setComments] = useState([
    {
      text: 'This is reply 1.',
      replies: [
        {
          text: 'This is reply to reply 1.',
        },
        {
          text: 'This is another reply to reply 1.',
          replies: [
            {
              text: 'This is reply to second reply of reply 1.',
            },
          ],
        },
      ],
    },
    {
      text: 'This is reply 2.',
    },
  ]);

 

  const handleReply = (newReply, parentIndex) => {
    const newComments = [...comments];
    console.log("parentindex", parentIndex);
    if (parentIndex !== undefined) {
      newComments[parentIndex].replies = newComments[parentIndex].replies || [];
      newComments[parentIndex].replies.push({ text: newReply });
    } else {
      newComments.push({ text: newReply });
    }
    setComments(newComments);
  };

  const padding = 20;

  return (
    <div>
      <h1>Comments</h1>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} index={index} padding={padding} onReply={(newReply, index) => handleReply(newReply, index)} />
      ))}
    </div>
  );
};

export default App;
