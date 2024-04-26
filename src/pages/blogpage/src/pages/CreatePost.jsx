import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../config/firebaseConfig.js";
import { useNavigate } from "react-router-dom";
const CreatePost = ({ isAuth }) => {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const postCollectionRef = collection(db, "posts");
  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      description,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login"); // Redirect to login page
    }
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-[4rem] font-bold mb-4">Create a Post</h1>
      <div className="w-[45rem] h-[40rem] my-11 bg-white rounded-lg shadow-xl flex gap-[2rem] flex-col justify-center items-center">
        <div className="w-[30rem]">
          <label className="font-bold text-[18px]">Title:</label>
          <input
            type="text"
            placeholder="title..."
            className="w-full h-16 p-3 text-xl mb-4 outline-none border border-gray-600"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="w-[30rem]">
          <label className="font-bold text-[18px]">Description</label>
          <textarea
            type="description"
            placeholder="description..."
            className="w-full h-[16rem] p-3 text-xl mb-4 outline-none border border-gray-600"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          onClick={createPost}
          className="bg-[#ff3556] text-white px-4 py-2 rounded-lg text-xl"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
