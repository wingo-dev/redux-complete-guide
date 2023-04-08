export const fetchPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      return { type: "fetch_post", payload: Object.values(data) };
    });
  // return { type: "fetch_post" };
};
