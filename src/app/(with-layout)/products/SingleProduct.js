import Image from "next/image";
import Link from "next/link";

const SingleProduct = ({ product }) => {
  const { id, title, price, features, imageURL } = product;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <Image
            className="my-5 mx-auto"
            width={500}
            height={500}
            src="https://img.freepik.com/free-vector/realistic-energy-drink-ad-template_52683-8489.jpg?w=740&t=st=1687546820~exp=1687547420~hmac=e9dadb12bd71a6608f2b89a37cdd3c771240eb9bd4c1d70c38502463246ebfb3"
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}!<div className="badge badge-secondary p-4"> ${price}</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link href={`/products/${id}`}>
              
              <button className="btn btn-primary">Show Details</button>
            </Link>
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
