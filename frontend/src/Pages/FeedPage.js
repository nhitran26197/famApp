import "../Styles/Feed.css";
import Navbar from "../Components/NavBar.js";
import Post from "../Components/Post.js";
import AddButton from "../Components/AddButton.js";

function FeedPage() {
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
export default FeedPage;
