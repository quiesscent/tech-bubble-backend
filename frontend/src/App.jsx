import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateBlogPost from "./Components/CreateBlogPost";
// import Login from "./Login";
// import Signup from "./Signup";
// import ForgotPassword from "./ForgotPassword";
// import BlogPage from "./Components/BlogPage";

export default function App() {
  return (
    <Router>
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/blog-page" element={<BlogPage />} />
      </Routes> */}
      {/* <BlogPage /> */}
      <CreateBlogPost />
    </Router>
  );
}
