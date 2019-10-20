import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButton] = useState(1);

  const handleClick = () => {
    setIdFromButton(id);
  };
  useEffect(() => {
    console.log("use Effect running");
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        console.log(response);
        setPost(response.data);
      })
      .catch(error => {
        setPost({ title: "Error from fetching the Data for id:" + id });
        console.log(error);
      });
  }, [idFromButtonClick]);
  // Empty array [] dependency to fetch data only once.
  return (
    <div>
      <h1>Welcome to React</h1>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch Post</button>
      <div>{post.title}</div>
      {/* <ul>
        {posts.length
          ? posts.map(post => <li key={post.id}>{post.title}</li>)
          : ""}
      </ul> */}
    </div>
  );
}

export default DataFetching;
