import {gql} from '@apollo/client';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const queryGetCategoryBlog = gql`query MyQuery {
    my_blog_categories {
      name_categories
      blog_and_categories_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`  

const CategoryBlog = () => {

    const {loading,data} = useQuery(queryGetCategoryBlog);
    const categories = data ? data.my_blog_categories : null 

    return ( 
        <div className="w-full md:w-4/12 md:sticky md:top-24 my-3 p-5 bg-blue-linear flex flex-wrap rounded-xl shadow-custom">
            <h3 className="text-center text-white p-1 mb-3 text-xl font-bold w-full">CATEGORIES</h3>
            {
                categories?.map((data)=>
                    <Link to={`/blog/category/${data.name_categories}`} key={data.name_categories} className="m-2 block font-semibold bg-white px-3 
                    py-1 text-xs rounded-2xl text-blue-600 capitalize"
                    >
                        {`#${data.name_categories}`} 
                        <span className="text-blue-600">
                            {` (${data.blog_and_categories_aggregate.aggregate.count})`}
                        </span>
                    </Link>
                )
            }
        </div>
    );
}
 
export default CategoryBlog;