
const SingleBlog = ({params}) => {
    console.log(params)
    const [year,id]=params.segments 
    return (
        <div>
            <h1>Single Blog:{year}</h1>
            <h1> Blog:{id}</h1>
        </div>
    );
};

export default SingleBlog;