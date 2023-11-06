import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import "./App.css";
import CreatePost from "../Components/CreatePost";
import PostList from "../Components/PostList";
import { useState } from "react";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          <Outlet />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
