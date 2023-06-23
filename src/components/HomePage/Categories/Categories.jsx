import getAllCategories from "@/utils/getAllCategories";
import Category from "../Category/Category";

const Categories = async () => {
  const categories = await getAllCategories();
  console.log(categories);
  return (
    <div className="mx-32">
      <h1 className="text-2xl font-bold">All Categories</h1>
      <div className=" grid grid-cols-3 gap-5">
        {categories?.map((category) => (
          <Category category={category} key={category.id}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
