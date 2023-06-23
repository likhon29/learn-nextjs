import Image from "next/image";

const Category = ({ category }) => {
  console.log(category.name);
  return (
    <div>
      <Image
        className="my-5 mx-auto"
        width={500}
        height={500}
        src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg"
        alt=""
      />
    </div>
  );
};

export default Category;
