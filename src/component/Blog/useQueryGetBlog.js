import { useState,useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { useHistory, useParams } from "react-router";
import queryGetBlog from "./queryBlog";

const useQueryGetBlog = () => {
    const params = useParams();
    const {pathname} = useHistory().location;
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [getBlogByParams,{data:dataBlogBySearch,loading:loadingBlogBySearch}] = useLazyQuery(queryGetBlog({
        table:'blog',
        content:false,
        blog:false
    }));
    const [getBlogByCategory,{data:dataBlogByCategory,loading:loadingBlogByCategory}] = useLazyQuery(queryGetBlog({
        table:'blog_and_categories',
        content:false,
        blog:true
    }));

    const callApi = async()=>{
        let whereCondition = {};
        let condition = {};

        const getWhereObject = (condition,column)=>{
            return {
                where:{
                    [column]:condition
                }
            }
        }

        if(pathname===`/blog/search/${params.searchParams}`){
            condition = {
                _ilike:`%${params.searchParams}%`
            }
            whereCondition = getWhereObject(condition,"title_blog");
            await getBlogByParams({variables:whereCondition});
        }

        else if(pathname===`/blog`){
            await getBlogByParams({variables:whereCondition});
        }
        
        else if(pathname===`/blog/category/${params.categoryParams}`){
            condition = {
                name_categories:{
                    _eq:params.categoryParams
                }
            }
            whereCondition = getWhereObject(condition,"category");
            await getBlogByCategory({variables:whereCondition});
        }

        return "solve";
    }

    useEffect(()=>{
        callApi();
    },[pathname]);

    useEffect(()=>{
        if(dataBlogBySearch){
            setData(dataBlogBySearch.my_blog_blog.map((data)=>data));
        }
        setLoading(loadingBlogBySearch);
    },[dataBlogBySearch]);

    useEffect(()=>{
        if(dataBlogByCategory){
            setData(dataBlogByCategory.my_blog_blog_and_categories.map(({blog})=>blog));
        }
        setLoading(loadingBlogByCategory);
    },[dataBlogByCategory])

    return {loading,data}
}
 
export default useQueryGetBlog;