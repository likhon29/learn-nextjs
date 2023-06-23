import Image from "next/image";
import Link from "next/link";

const Category = ({ category }) => {
  console.log(category.imageUrl);
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <Image
          className="my-5 mx-auto"
          width={500}
          height={500}
          src={category.imageUrl}
          alt=""
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-[white] font-bold text-3xl">
          {category.name}!
        </h2>
        <p className="text-[#a8a8c0]">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions justify-end">
         <Link href={`/products?categoryId=${category.id}`}> <button className="btn btn-primary">Show All</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
