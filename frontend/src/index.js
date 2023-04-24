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
import EventPage from "./pages/EventPage";
import TravelPage from "./pages/TravelPage";
import BucketList from "./pages/Bucket";
import ProfilePage from "./pages/ProfilePage";
import TimelineDisplay from "./pages/TimelineDisplay";
import Forgot from "./pages/ResetPage";
import AddPost from "./pages/addPost";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        {/* <Route path="/addpost" element={<AddPost />} /> */}
        {/* <Route path="/feedpage" element={<Feedpage />} /> */}
        <Route path="/eventpage" element={<EventPage />} />
        <Route path="/travelpage" element={<TravelPage />} />

        {/* <Route path="/bucket" element={<BucketList />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/timeline" element={<TimelineDisplay />} />
        <Route path="/reset-password" element={<Forgot />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
