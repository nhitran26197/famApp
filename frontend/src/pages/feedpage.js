import "../css/feedpage.css";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import AddButton from "../components/AddButton";
import MapComponent from "../components/MapComponent";
import { Wrapper } from "@googlemaps/react-wrapper";

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
            <div className="h-24" />
          </div>
          <div>
            <AddButton />
          </div>
        </div>
        <div>
          <Wrapper apiKey={"AIzaSyCecWQ01w2hL3sX2XNdjBVsL0KA9Yln4Hs"}>
            <MapComponent center={center} zoom={zoom} />
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
export default feedpage;
