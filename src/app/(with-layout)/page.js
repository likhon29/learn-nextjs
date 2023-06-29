import Image from "next/image";
import React, { Suspense } from "react";
import image1 from "@/assets/tree-736885_1280.jpg";
import Categories from "@/components/HomePage/Categories/Categories";
import PopularProducts from "@/components/HomePage/PopularProducts/PopularProducts";
const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Image className=" mx-auto" src={image1} alt="" placeholder="blur" />

      <div className="container">
        <Categories></Categories>
      </div>
      <Suspense
        fallback={
          <h1 className="text-center font-semibold text-2xl">Loading...</h1>
        }
      >
        <PopularProducts></PopularProducts>
      </Suspense>
    </div>
  );
};

export default HomePage;
