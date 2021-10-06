import { useParams,Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import HighLight from "../Form/HightLight";
import queryGetBlog from "./queryBlog";
import { v4 as uuid } from "uuid";
import './ReadBlog.css'

const ReadBlog = () => {
    let {link} = useParams(); // mendapatkan link blog
    // ambil data berdasarkan link
    const {loading, data } = useQuery(queryGetBlog({table:'blog',content:true}),{variables:{
      where: {
        link_blog: {
          _eq: link
        }
      }
    }});

    if (loading) return null;

    const dataBlog = data.my_blog_blog[0];

    return (
        <div className="my-24 md:my-32 w-10/12 mx-auto read-blog roboto">
            <h1 className="nunito max-w-2xl text-4xl font-bold">{dataBlog.title_blog}</h1>
            <span className="text-global-gray text-sm my-2 mr-3 inline-block roboto">{dataBlog.date_blog}</span>
            {
              dataBlog.blog_and_categories.map(({category})=>
                <Link key={uuid()} to={`/blog/category/${category.name_categories}`} className="inline-block capitalize 
                  mt-4 mx-0.5 bg-blue-linear px-3 py-1 text-xs rounded-2xl text-white">
                  {`# ${category.name_categories}`}
                </Link>
              )
            }

            <HighLight content={dataBlog.content_blog}/>
        </div>
    );
}
 
export default ReadBlog;
