export const fetchPostsSuccess = (p) => ({
  type: "FETCH_POST",
  payload: p,
});

export const fetchPost = () => async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  // dispatch(fetchPostsSuccess(data));
};
