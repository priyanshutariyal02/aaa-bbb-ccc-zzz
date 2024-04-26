import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../config/firebaseConfig";
import deleteIcon from "../assets/delete.png";

const BlogHome = ({ isAuth }) => {
  const [postLists, setPostLists] = useState([]);
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts(); // call the function
  }, [postCollectionRef]); // include postCollectionRef in the dependency array

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  return (
    <div className="w-full h-auto min-h-[100vh] flex flex-wrap justify-center items-center my-[3rem] pb-[4rem]">
      {postLists.map((post) => (
        <div key={post.id} className="w-[40rem] h-auto max-h-[40rem] flex flex-col gap-10 bg-white py-8 px-8 rounded-lg shadow-lg m-5">
          <div className="flex justify-between">
            <h1 className="text-4xl font-semibold uppercase tracking-wide">
              {post.title}
            </h1>
            {isAuth && auth.currentUser && post.author.id === auth.currentUser.uid && (
              <button
                onClick={() => deletePost(post.id)}
              >
                <img
                  src={deleteIcon}
                  className="w-10 h-10 text-red-500"
                  alt="Delete"
                />
              </button>
            )}
          </div>
          <p className="text-gray-600 text-lg font-semibold tracking-wide text-justify h-auto overflow-y-auto overflow-hidden p-3 break-words">
            {post.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogHome;
