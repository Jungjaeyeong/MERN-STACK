import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Upload = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handlePostSubmit = async () => {
    try {
      await axios.post("/api/post/submit", { title, content });
      navigate("/list");
    } catch (error) {
      alert("글 작성에 실패하였습니다.");
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "" || content === "") alert("모든 항목을 채워주세요");
    handlePostSubmit();
  };

  return (
    <div>
      <span>
        <form onSubmit={onSubmit}>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.currentTarget.value)}
          />
          <button type="submit">제출!</button>
        </form>
      </span>
    </div>
  );
};

export default Upload;
