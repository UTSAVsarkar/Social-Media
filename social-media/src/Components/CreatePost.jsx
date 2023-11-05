import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const { addPost } = useContext(PostListContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tages = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tages);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter you UserId here
        </label>
        <input
          placeholder="Your User Id"
          type="text"
          className="form-control"
          id="userId"
          ref={userIdElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={postTitleElement}
          placeholder="How are you feeling today...."
          type="text"
          className="form-control"
          id="title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={postBodyElement}
          placeholder="Tell us more about it"
          type="text"
          className="form-control"
          id="body"
          rows="4"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          ref={reactionsElement}
          placeholder="How many peaople reacted to this post"
          type="text"
          className="form-control"
          id="reactions"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags
        </label>
        <input
          ref={tagsElement}
          placeholder="Please enter your tages using space"
          type="text"
          className="form-control"
          id="tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
