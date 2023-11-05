import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};

export const PostListContext = createContext(DEFAULT_CONTEXT);

const postListReducer = (currentPostList, action) => {
  let postList = currentPostList;

  if (action.type === "DELETE_POST") {
    postList = currentPostList.filter(
      (post) => post.id != action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    postList = [action.payload, ...currentPostList];
  }

  return postList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: userId,
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userID: Date.now(),
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListContext.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going To Mumbai",
    body: "Hi friends I am going to Mumbai for my vaccation. Hope to ejoy a lot. Peace out!!!",
    reactions: 2,
    userID: "user-9",
    tags: ["vaccation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass Ho gaya bhai!",
    body: "4 saal ke baad pass ho gaya!",
    reactions: 15,
    userID: "user-12",
    tags: ["maja", "graduated"],
  },
];

export default PostListProvider;
