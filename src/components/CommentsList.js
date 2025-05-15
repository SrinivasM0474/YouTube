import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return (
    <div className="border-l-2 border-black-500">
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          <div className="pl-8">
            <CommentsList comments={comment?.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
