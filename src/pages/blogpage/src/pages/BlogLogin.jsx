import React from "react";
import { auth, provider } from "../config/firebaseConfig.js";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";

const BlogLogin = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-[40rem] h-[30rem] bg-white rounded-lg shadow-lg flex gap-10 flex-col justify-center items-center">
        <img src={google} className="w-20 h-20" alt="" />
        <p className="text-3xl font-semibold">
          Sign with Google to continue
        </p>
        <button
          type="button"
          className="bg-blue-500 text-white text-[22px] font-semibold px-4 py-2 rounded-lg mt-4"
          onClick={signInWithGoogle}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default BlogLogin;
