"use client";

import { useParams, useSearchParams } from "next/navigation";

const SingleBlog = ({ params, searchParams }) => {
  const [year, id] = params.segments;
  const params2 = useParams();
  const searchParams2 = useSearchParams();
  console.log(searchParams2.toString());
  return (
    <div>
      <h1>Title:{searchParams.title}</h1>
      <h1>Single Blog:{year}</h1>
      <h1> Blog:{id}</h1>
    </div>
  );
};

export default SingleBlog;
