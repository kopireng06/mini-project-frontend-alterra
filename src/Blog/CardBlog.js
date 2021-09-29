import { Link } from "react-router-dom";

const CardBlog = () => {
    return (  
        <Link to="#" className="w-full md:w-11/12 rounded-xl shadow-custom p-5 my-3 block">
            <h2 className="font-bold text-global-dark-blue text-2xl nunito">Introduction Guide to Next.js</h2>
            <span className="text-global-gray text-sm my-2 inline-block roboto">Oct 01, 2020</span>
            <p className="text-global-gray roboto">
                Next.js is a React framework that ships with all the features you need for 
                production. It gives you the best developer experience because it comes 
                with several functionalities
            </p>
            <button className="mt-10 mr-2 ml-auto block bg-blue-linear px-3 py-1 text-xs rounded-2xl text-white">
                #React
            </button>
        </Link>
    );
}
 
export default CardBlog;