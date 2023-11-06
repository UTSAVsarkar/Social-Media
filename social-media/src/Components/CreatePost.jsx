import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  //const { addPost } = useContext(PostListContext);

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter you UserId here
        </label>
        <input
          placeholder="Your User Id"
          type="text"
          className="form-control"
          id="userId"
          name="userId"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          name="title"
          placeholder="How are you feeling today...."
          type="text"
          className="form-control"
          id="title"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          name="body"
          placeholder="Tell us more about it"
          type="text"
          className="form-control"
          id="body"
          rows="4"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          name="reactions"
          placeholder="How many peaople reacted to this post"
          type="text"
          className="form-control"
          id="reactions"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags
        </label>
        <input
          name="tags"
          placeholder="Please enter your tages using space"
          type="text"
          className="form-control"
          id="tags"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((res) => {
      //addPost(res);
      console.log(res);
    });

  return redirect("/");
}

export default CreatePost;
