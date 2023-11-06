import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};

export const PostListContext = createContext(DEFAULT_CONTEXT);

const postListReducer = (currentPostList, action) => {
  let postList = currentPostList;

  switch (action.type) {
    case "DELETE_POST":
      postList = currentPostList.filter(
        (post) => post.id != action.payload.postId
      );
      break;
    case "ADD_INITIAL_POSTS":
      postList = action.payload.posts;
      break;
    case "ADD_POST":
      postList = [action.payload.post, ...currentPostList];
      break;
    default:
      postList = currentPostList;
      break;
  }

  return postList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        post,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
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

export default PostListProvider;
