//bucket list 
import React from 'react';
const BucketListCard = ({ item }) => {
  return (
    <>
<div class="h-l max-w-2xl mx-auto mt-24 space-y-20">
  <div class="max-w-screen md:w-3/4 mx-auto">
    <div class="flex flex-row space-y-2 items-center justify-center h-full py-4 bg-gray-800 rounded-xl space-x-10">
      <div class="w-2/3">
        <p class="w-full text-2xl font-semibold text-white">{item.title}</p>
        <p class="w-full pb-8 text-sm tracking-wide leading-tight text-white">{item.description}</p>
        <div class="rounded w-1/3">
          <div class="opacity-95 border rounded-lg border-white px-4">
            <p class="m-auto inset-0 text-sm font-medium leading-normal text-center text-white py-2">{item.location}</p>
          </div>
        </div>
      </div>
      <div class="w-auto h-">
        <img alt="too lazy for alt, sorry /shrug" class="flex-1 h-full rounded-lg" src="https://via.placeholder.com/96x136" />
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default BucketListCard;
