import "../css/feedpage.css";
import Navbar from "../components/Navbar";
import Post from "../components/TravelPost";
import AddButton from "../components/AddButton";
import { MapComponent } from "../components/MapPostTravel";
import { Wrapper } from "@googlemaps/react-wrapper";
import { useState, useEffect } from "react";
import AddPostModal from "../components/addPostModal";

function Travelpage() {
  const [posts, setPosts] = useState();
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3030/getPosts/travel", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        return JSON.stringify(data);
      })
      .then((res) => {
        setPosts(JSON.parse(res));
        //setLoading(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  //   useEffect(() => {
  //     console.log(posts);
  //   }, [posts]);

  return (
    <div classsName="container">
      <div>
        <Navbar />
      </div>
      <div className="content">
        <div className="feed">
          {posts &&
            posts.map((post, i) => {
              return (
                <div key={i}>
                  <Post
                    picURL={post.picture}
                    caption={post.caption}
                    date={post.date}
                  />
                  <div className="h-24" />
                </div>
              );
            })}
          <div className="add-post-button">
            <AddPostModal className="button1" />
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
export default Travelpage;
