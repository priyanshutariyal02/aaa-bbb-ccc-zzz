import React, { useState } from "react";
import BlogHome from "./blogpage/src/pages/BlogHome";

const Blog = () => {
  return (
    <div className="w-full min-h-[100vh] pt-[10rem]">
      <h1 className="text-center text-[4rem] font-bold">Blogs & Events</h1>
      <BlogHome />
    </div>
  );
};

export default Blog;
