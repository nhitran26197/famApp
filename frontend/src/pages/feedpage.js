import "../css/feedpage.module.css";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import AddButton from "../components/AddButton";

function feedpage() {
  return (
    <div classsName="container">
      <div>
        <Navbar />
      </div>
      <div className="content">
        <div className="feed">
          <div>
            <Post />
            <Post />
            <div className="h-24" />
          </div>
          <div>
            <AddButton />
          </div>
        </div>
        <div>google maps</div>
      </div>
    </div>
  );
}
export default feedpage;
