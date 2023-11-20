import { useState } from 'react';
import Comment from './Comment';
import insertNode from './insertNode';


const App = () => {
  const [comments, setComments] = useState(
    {
      id: 1,
      items: [],
    },
  );

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(comments, folderId, item);
    setComments(finalStructure);
  };



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

      <Comment comments={comments} padding={padding} handleInsertNode={handleInsertNode} />
    </div>
  );
};

export default App;
