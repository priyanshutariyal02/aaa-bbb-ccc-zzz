import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogHome from "./pages/BlogHome.jsx";
import BlogLogin from "./pages/BlogLogin.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebaseConfig.js";
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/bloglogin";
    });
  };

  return (
    <div className="w-full h-full bg-slate-200">
      <Router>
        <div className="w-full bg-black text-white h-16 flex justify-center items-center">
          <nav className="w-full px-8 flex gap-10 justify-center items-center text-xl uppercase">
            <Link to="/">Blog Home</Link>

            {!isAuth ? (
              <Link to="/bloglogin" className="bg-blue-500 p-2 rounded-lg">
                Owner Login
              </Link>
            ) : (
              <>
                <Link to="/createpost">Create Post</Link>
                <button
                  className="uppercase bg-red-500 p-2 rounded-lg"
                  onClick={signUserOut}
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<BlogHome isAuth={isAuth} />} />
          <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
          <Route
            path="/bloglogin"
            element={<BlogLogin setIsAuth={setIsAuth} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
