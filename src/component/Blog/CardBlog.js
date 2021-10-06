import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const CardBlog = ({link_blog,desc_blog,title_blog,date_blog,blog_and_categories}) => {
    return (  
        <Link to={`/blog/${link_blog}`} className="w-full md:w-11/12 rounded-xl shadow-custom p-5 my-3 block">
            <h2 className="font-bold text-global-dark-blue text-2xl nunito">{title_blog}</h2>
            <span className="text-global-gray text-sm my-2 inline-block roboto">{date_blog}</span>
            <p className="text-global-gray roboto">
                {desc_blog}
            </p>
            <div className="flex flex-wrap justify-end mt-10">
                {
                    blog_and_categories.map(({category})=>
                        <Link key={uuidv4()} to={`/blog/category/${category.name_categories}`} className="inline=block 
                            bg-blue-linear px-3 py-1 text-xs rounded-2xl text-white capitalize mx-0.5"
                        >
                            {`#${category.name_categories}`}
                        </Link>
                    )
                }
            </div>
        </Link>
    );
}
 
export default CardBlog;