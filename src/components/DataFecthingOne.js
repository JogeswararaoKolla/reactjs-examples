import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFecthingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/101")
      .then(response => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch(() => {
        setLoading(false);
        setPost({});
        setError("Something went wrong");
      });
  }, []);

  return (
    <div>
      {loading ? "loading" : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFecthingOne;
