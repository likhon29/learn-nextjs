import Link from "next/link";

export const metadata = {
  title: "Blogs | Learn NextJs",
  description: "asdjkasdlkjasd",
};
const BlogsPage = () => {
  const blogs =[
    {
      id:1,
      title:'title-1',
      year:2016,
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam similique, suscipit consectetur laudantium quaerat vero laborum eaque quos facere.'
    },
    {
      id:2,
      title:'title-2',
      year:2019,
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam similique, suscipit consectetur laudantium quaerat vero laborum eaque quos facere.'
    },
    {
      id:3,
      title:'title-3',
      year:2017,
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam similique, suscipit consectetur laudantium quaerat vero laborum eaque quos facere.'
    },
    {
      id:4,
      title:'title-4',
      year:2018,
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam similique, suscipit consectetur laudantium quaerat vero laborum eaque quos facere.'
    },
    {
      id:5,
      title:'title-5',
      year:2020,
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam similique, suscipit consectetur laudantium quaerat vero laborum eaque quos facere.'
    },
    
  ]
    return (
        <div className="text-[orange] container mx-auto">
          
            {/* {
              blogs.map(({id,title,year,description})=>{(<Link className="block border-blue-500 p-2 my-2" href={`/blogs/${year}/${id}`} key={id}>{title}</Link>)})
            } */}
            {
              blogs.map((blog)=><Link className="block border p-2 my-2" href={{
                pathname:`/blogs/${blog.year}/${blog.id}`,
                query:{
                  title:blog.title
                }
              }} key={blog.id}>{blog.title}</Link>)
            }
        </div>
    );
};

export default BlogsPage;