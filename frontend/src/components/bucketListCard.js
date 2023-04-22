import React from 'react';
import BucketListCard from '../components/bucketList';

const BucketList = ({ items }) => {
  console.log(items);
  return (
    <div className="bucket-list">
      {//can use map to iterate through the items array and return a bucket list card for each item
      items.map((item) => {
        return <BucketListCard item={item} />;
      })
      }
    </div>
  );
};

export default BucketList;
