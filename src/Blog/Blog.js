import { Link } from "react-router-dom";
import CardBlog from "./CardBlog";

const Blog = ()=>{
    return(
        <div className="lg:container mx-auto flex justify-center mt-32">
            <div className="flex flex-col-reverse md:flex-row w-10/12 items-start">
                <div className="w-full md:w-8/12">
                    <CardBlog/>
                    <CardBlog/>
                    <CardBlog/>
                </div>
                <div className="w-full md:w-4/12 my-3 p-5 bg-blue-linear flex flex-wrap rounded-xl shadow-custom">
                    <h3 className="text-center text-white p-1 mb-3 text-xl font-bold w-full">CATEGORIES</h3>
                    <button className="m-2 block font-semibold bg-white px-3 py-1 text-xs rounded-2xl text-blue-600">
                        #React <span className="text-blue-600">(15)</span>
                    </button>
                    <button className="m-2 block font-semibold bg-white px-3 py-1 text-xs rounded-2xl text-blue-600">
                        #Javascript <span className="text-blue-600">(10)</span>
                    </button>
                    <button className="m-2 block font-semibold bg-white px-3 py-1 text-xs rounded-2xl text-blue-600">
                        #Next <span className="text-blue-600">(8)</span>
                    </button>
                    <button className="m-2 block font-semibold bg-white px-3 py-1 text-xs rounded-2xl text-blue-600">
                        #Serverless <span className="text-blue-600">(4)</span>
                    </button>
                    <button className="m-2 block font-semibold bg-white px-3 py-1 text-xs rounded-2xl text-blue-600">
                        #Redux <span className="text-blue-600">(5)</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Blog;