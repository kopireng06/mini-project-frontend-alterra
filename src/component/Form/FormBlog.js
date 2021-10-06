/* eslint-disable array-callback-return */
import {useEffect, useState} from "react";
import MyReactQuill from "./MyReactQuill";
import { useQuery,useMutation } from "@apollo/client";
import { queryGetCategories,mutationInsertBlog,mutationUpdateBlog } from "./queryFormBlog";
import { InputText,InputCheckBox } from "./InputCreator";
import { inputTitleConfig,inputDescriptionConfig,inputCheckBoxConfig } from "./InputConfig";
import useManageInput from "./useManageInput";
import queryGetBlog from "../Blog/queryBlog";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const FormBlog = ()=> {
    // untuk mendapatkan id dalam kasus /blog/edit/id
    const {id} = useParams();
    // untuk menampilkan toaster sukses ketika create atau delete
    const notify = () => toast.success("Success !", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose:2000
    });
    // berkaitan komunikasi dengan api graphql
    const { loading:loadingGetCategories, data:dataCategories} = useQuery(queryGetCategories);
    const [insertBlog] = useMutation(mutationInsertBlog,{onCompleted:(data)=>handleSuccesSubmit(data,"insert")});
    const [updateBlog] = useMutation(mutationUpdateBlog,{onCompleted:(data)=>handleSuccesSubmit(data,"update")});
    const {loading:loadingGetBlog, data:dataBlog} = useQuery(queryGetBlog({table:'blog',content:true}),{variables:{
        where: {
          id_blog: {
            _eq: id
          }
        }
      }});
    // nilai dari editor
    const [content,setContent] = useState('');
    const [errorContent,setErrorContent] = useState("");
    // fungsi untuk memanage input
    const titleInput = useManageInput(inputTitleConfig);
    const descriptionInput = useManageInput(inputDescriptionConfig);
    const categoriesInput = useManageInput(inputCheckBoxConfig);

    //untuk menghandle kalau sukses dan meredirect ke blog terkait
    const handleSuccesSubmit = (data,method)=>{
        let {link_blog} = data[`${method}_my_blog_blog`].returning[0];
        notify();
        setTimeout(()=>{
            window.location.href=`/blog/${link_blog}`;
        },2000)
    }

    //fungsi untuk memvalidasi
    const validateOnSubmit = (allConfig)=>{
        let canSubmit = true;
        allConfig.forEach((config)=>{
            if(config.getValue().length === 0){
                config.setError(config.messageError);
                canSubmit = false;
            }
            else{
                config.setError("");
            }
        });
        if(content===""){
            setErrorContent("content cannot be empty");
            canSubmit=false;
        }
        else{
            setErrorContent("");
        }
        return canSubmit;
    }

    //fungsi untuk mensubmit
    const onSubmit=(e)=>{
        e.preventDefault();
        let allConfig = [titleInput,descriptionInput,categoriesInput];
        if(validateOnSubmit(allConfig)){
            const baseVariables = {
                desc_blog: descriptionInput.getValue(),
                title_blog: titleInput.getValue(),
                link_blog: titleInput.getValue().toLowerCase().split(" ").join("-"),
                content_blog: content,
            }
            if(id!==undefined){
                updateBlog({variables:{
                    ...baseVariables,
                    id:id,
                    objects:categoriesInput.getValue().map(({id_categories})=>{
                        return {
                            id_blog:id,
                            id_categories:id_categories
                        }
                    })
                }});
            }
            else{
                insertBlog({variables:{
                    ...baseVariables,
                    data: categoriesInput.getValue()
                }});
            }
        }
    }

    useEffect(()=>{
        //kalau edit
        if(!loadingGetCategories && !loadingGetBlog && id){
            let titleBlog = dataBlog.my_blog_blog[0].title_blog;
            let descBlog = dataBlog.my_blog_blog[0].desc_blog; 
            let contentBlog =  dataBlog.my_blog_blog[0].content_blog;
            let categoriesBlog = dataBlog.my_blog_blog[0].blog_and_categories.map(({category})=>{
                return category.name_categories;
            })
            categoriesInput.setOption({
                checkOption:dataCategories.my_blog_categories,
                defaultValue:categoriesBlog
            });
            titleInput.setValue(titleBlog);   
            descriptionInput.setValue(descBlog);
            setContent(contentBlog);
        }
        //tanpa edit
        else if(!loadingGetCategories){
            categoriesInput.setOption({
                checkOption:dataCategories.my_blog_categories
            });
        }
    },[loadingGetCategories,loadingGetBlog])

    return (
        <form onSubmit={onSubmit} className="my-24 lg:container mx-auto">
            <div className="w-10/12 mx-auto grid grid-cols-12">
                <InputText {...titleInput}/>
                <InputText {...descriptionInput}/>
                <InputCheckBox {...categoriesInput}/>
                <MyReactQuill content={content} setContent={setContent} error={errorContent}/>
                <input type="submit" className="cursor-pointer col-start-10 col-span-3
                justify-self-end shadow-sm rounded p-2 m-2 mt-5 text-white bg-blue-linear"
                />
            </div>
        </form>
    ) ;
}

export default FormBlog