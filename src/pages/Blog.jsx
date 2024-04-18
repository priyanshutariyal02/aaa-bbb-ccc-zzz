import React, { useState } from 'react';
import Footer from '../components/Footer';

const Blog = () => {
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem('blogPosts')) || []
  );
  const [newPost, setNewPost] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(
    localStorage.getItem('isAuthorized') === 'true'
  );

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePostChange = (e) => {
    setNewPost(e.target.value);
  };

  const handleSubmit = () => {
    if (password === '') {
      const updatedPosts = [...posts, newPost];
      setPosts(updatedPosts);
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
      localStorage.setItem('isAuthorized', 'true');
      setIsAuthorized(true);
      setNewPost('');
    } else {
      alert('Incorrect password');
    }
  };

  const handleDelete = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  return (
    <>
      <div className="bg-gray-100 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isAuthorized ? (
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">Blog Post</h2>
              <div className="border-t-2 border-gray-400 mb-8"></div>
              <textarea
                value={newPost}
                onChange={handlePostChange}
                placeholder="Write a new post..."
                className="w-full h-32 p-4 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSubmit}
                className="block mx-auto mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Post
              </button>
              {posts.map((post, index) => (
                <div key={index} className="mt-8 p-4 bg-white rounded-md shadow-lg flex justify-between items-center">
                  {post}
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">Blog Post</h2>
              <div className="border-t-2 border-gray-400 mb-8"></div>
              <div className="flex justify-center">
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter password"
                  className="w-full max-w-md p-4 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSubmit}
                  className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='mt-[4rem]'>

      </div>
      <Footer />
    </>
  );
};

export default Blog;