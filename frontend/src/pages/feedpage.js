import "../css/feedpage.css";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import AddButton from "../components/AddButton";
import { MapComponent } from "../components/MapPosts";
import { Wrapper } from "@googlemaps/react-wrapper";

function feedpage() {
  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };
  const zoom = 13;
  return (
    <div classsName="container">
      <div>
        <Navbar />
      </div>
      <div className="content">
        <div className="feed">
          <div>
            <Post />
            <div className="h-24" />
          </div>
          <div>
            <AddButton />
          </div>
        </div>
        <div>
          <Wrapper
            apiKey={"AIzaSyCecWQ01w2hL3sX2XNdjBVsL0KA9Yln4Hs"}
            version={["beta"]}
            libraries={["marker"]}
          >
            <MapComponent />
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
export default feedpage;
