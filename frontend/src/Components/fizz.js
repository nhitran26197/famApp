import React from "react";
import TimeLine from "./Line";
const fffa = ({ items }) => {
    console.log(items);
    return (
        <div>
        {//can use map to iterate through the items array and return a bucket list card for each item
        items.map((item) => {
          return <TimeLine items={item} />;
        })
        }
      </div>
    );
    };

export default fffa;