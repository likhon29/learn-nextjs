import Image from "next/image";
import React from "react";
import image1 from "@/assets/tree-736885_1280.jpg";
import Categories from "@/components/HomePage/Categories/Categories";
const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Image className=" mx-auto" src={image1} alt="" placeholder="blur" />
      
      <div className="container">
        <Categories></Categories>
      </div>
    </div>
  );
};

export default HomePage;
