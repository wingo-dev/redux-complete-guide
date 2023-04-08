export const fetchPost = () => {
  let posts = [];
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      posts.push(data);
    });

  return { type: "fetch_post", payload: posts };
};
