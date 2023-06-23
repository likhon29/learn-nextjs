import getAllProducts from "@/utils/getAllProducts";
import SingleProduct from "./SingleProduct";

const ProductPage = async ({ searchParams }) => {
  const products = await getAllProducts(searchParams.categoryId);
  return (
    <div className="container m-20 ">
      <div className="grid grid-cols-3 gap-5">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
