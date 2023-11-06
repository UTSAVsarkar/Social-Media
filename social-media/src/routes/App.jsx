import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import "./App.css";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar />
        <div className="content">
          <Header />
          <Outlet />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
