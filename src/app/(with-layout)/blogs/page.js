"use client";
import loadBlogsData from "@/utils/loadBlogsData";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Blogs | Learn NextJs",
  description: "asdjkasdlkjasd",
};
const BlogsPage = async () => {
  // const blogs = [
  //   {
  //     id: 1,
  //     title: "title-1",
  //     year: 2016,
  //     description:
  //       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam similique, suscipit consectetur laudantium quaerat vero laborum eaque quos facere.",
  //   },
  //   {
  //     id: 2,
  //     title: "title-2",
  //     year: 2019,
  //     description:
  //       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam similique, suscipit consectetur laudantium quaerat vero laborum eaque quos facere.",
  //   },
  //   {
  //     id: 3,
  //     title: "title-3",
  //     year: 2017,
  //     description:
  //       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam similique, suscipit consectetur laudantium quaerat vero laborum eaque quos facere.",
  //   },
  //   {
  //     id: 4,
  //     title: "title-4",
  //     year: 2018,
  //     description:
  //       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam similique, suscipit consectetur laudantium quaerat vero laborum eaque quos facere.",
  //   },
  //   {
  //     id: 5,
  //     title: "title-5",
  //     year: 2020,
  //     description:
  //       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam similique, suscipit consectetur laudantium quaerat vero laborum eaque quos facere.",
  //   },
  // ];
  const router = useRouter();

  // fetch data

  const blogs = await loadBlogsData();

  return (
    <div className=" container mx-auto p-10 mt-10">
      {/* {
              blogs.map(({id,title,year,description})=>{(<Link className="block border-blue-500 p-2 my-2" href={`/blogs/${year}/${id}`} key={id}>{title}</Link>)})
            } */}
      {blogs.map((blog) => (
        <div key={blog.id} className="block border p-2 my-2">
          <h2 className="text-2xl text-[orange]">
            {blog.id} . {blog.title}
          </h2>
          <p className="m-5">{blog.body}</p>
          <Link href={`/blogs/${blog.id}`}>
            <button className="bg-[green] text-white p-2 m-2 rounded">
              Details
            </button>
          </Link>
        </div>
        // <button key={blog.id} className="block border p-2 my-2" onClick={()=>{
        //   router.push(`/blogs/${blog.year}/${blog.id}?title=${blog.title}`);
        // }}>{blog.title}</button>
      ))}
    </div>
  );
};

export default BlogsPage;
