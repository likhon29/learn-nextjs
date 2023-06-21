import loadBlogsData from "@/utils/loadBlogsData";
import loadSingleBlogData from "@/utils/loadSingleBlogData";

export const generateMetadata = async ({ params }) => {
  const { title } = await loadSingleBlogData(params.id);

  return {
    title: title,
  };
};

export const generateStaticParams = async () => {
  const blogs = await loadBlogsData();

  return blogs.map(({ id }) => ({
    id: id.toString(),
  }));
};
const SingleBlog = async ({ params }) => {
  const blog = await loadSingleBlogData(params.id);
  return (
    <div className="container mx-auto border m-5 p-5 bg-slate-200">
      <h1 className="text-[blue]">
        {blog.id} - {blog.title}
      </h1>

      <p>{blog.body}</p>
    </div>
  );
};

export default SingleBlog;
