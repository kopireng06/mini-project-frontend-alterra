import CardBlog from "./CardBlog";
import CategoryBlog from "./CategoryBlog";
import useQueryGetBlog from "./useQueryGetBlog";

const Blog = ()=>{

    const {data} = useQueryGetBlog();

    if (!data) return null;

    return(
        <div className="lg:container mx-auto flex justify-center my-24">
            <div className="flex flex-col-reverse md:flex-row w-10/12 items-start">
                <div className="w-full md:w-8/12">
                    {
                        data.map((value)=><CardBlog key={value.id_blog} {...value}/>)
                    }
                </div>
                <CategoryBlog/>
            </div>
        </div>
    )
}

export default Blog;