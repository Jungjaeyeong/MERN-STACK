import { useEffect, useState } from "react";
import axios from "axios";

const List = () => {
  const [postList, setPostList] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPostList = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/post/list");
      setPostList(data.postList);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostList();
  }, []);

  return (
    <div>
      {loading ? (
        <span>Loading...</span>
      ) : (
        postList?.map((post) => (
          <div key={post._id}>
            <p>title: {post.title}</p>
            content: {post.content}
          </div>
        ))
      )}
    </div>
  );
};

export default List;
