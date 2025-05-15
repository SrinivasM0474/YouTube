import React from "react";
// import Comment from "./Comment";
import CommentsList from "./CommentsList";
const commentsData = [
  {
    name: "Srinivas",
    text: "Comment 1",
    replies: [
      {
        name: "Srinivas",
        text: "Comment 1",
        replies: [],
      },
    ],
  },
  {
    name: "Srinivas",
    text: "Comment 1",
    replies: [
      {
        name: "Srinivas",
        text: "Comment 1",
        replies: [
          {
            name: "Srinivas",
            text: "Comment 1",
            replies: [
              {
                name: "Srinivas",
                text: "Comment 1",
                replies: [
                  {
                    name: "Srinivas",
                    text: "Comment 1",
                    replies: [
                      {
                        name: "Srinivas",
                        text: "Comment 1",
                        replies: [
                          {
                            name: "Srinivas",
                            text: "Comment 1",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Srinivas",
    text: "Comment 1",
    replies: [
      {
        name: "Srinivas",
        text: "Comment 1",
        replies: [
          {
            name: "Srinivas",
            text: "Comment 1",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Srinivas",
    text: "Comment 1",
    replies: [
      {
        name: "Srinivas",
        text: "Comment 1",
        replies: [],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 border border-cyan-500">
      <h1 className="font-bold text-2xl mb-5">Comments :</h1>
      <CommentsList comments={commentsData} />
      {/* <Comment data={commentsData[0]} /> */}
    </div>
  );
};

export default CommentsContainer;
