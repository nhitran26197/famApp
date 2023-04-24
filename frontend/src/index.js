import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Feedpage from "./pages/feedpage";
import BucketList from "./pages/Bucket";
import ProfilePage from "./pages/ProfilePage";
import TimelineDisplay from "./pages/TimelineDisplay";
import Forgot from "./pages/ResetPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/feedpage" element={<Feedpage />} />
        <Route path="/bucket" element={<BucketList />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/timeline" element={<TimelineDisplay />} />
        <Route path="/reset-password" element={<Forgot />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
