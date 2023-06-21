import Image from "next/image";
import React from "react";
import image1 from "@/assets/tree-736885_1280.jpg";
const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Image className=" mx-auto" src={image1} alt="" placeholder="blur"/>
      {/* <Image
        className="my-5 mx-auto"
        width='1000'
        height='600'
        src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg"
        alt=""
      /> */}
    </div>
  );
};

export default HomePage;
