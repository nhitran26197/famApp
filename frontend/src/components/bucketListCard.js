import React, {useState} from 'react';
import BucketListCard from '../components/bucketList';
import axios from 'axios';
const BucketList = ({ items }) => {

  const [Items, setItems] = useState([]);
  const getBucketListItems = () => {
    //api call to get the bucket list items
    //set the items array to the response
    axios
      .get("http://localhost:3030/bucketlist")
      .then((response) => {
        console.log(response);
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  


  return (
    
    <div className="bucket-list">
      
    <button 
    className="btn btn-primary" 
    onClick={getBucketListItems}>Get Bucket List Items</button>
    
      {//can use map to iterate through the items array and return a bucket list card for each item
      Items.map((item) => {
        return <BucketListCard item={item} />;
      })
      }
    </div>
  );
};

export default BucketList;
