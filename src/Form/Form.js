/* eslint-disable array-callback-return */
import React,{useState} from "react";
import { useForm } from "react-hook-form";
import {formData,renderClassForSpan} from "./formData";
import MyReactQuill from "./MyReactQuill";
import {gql, useMutation } from "@apollo/client";

const queryCreateBlog = gql`mutation MyMutation($content_blog: String!, $title_blog: String!, $categories_blog: Int!) {
    insert_my_blog_blog(objects: {content_blog: $content_blog, title_blog: $title_blog, categories_blog: $categories_blog}) {
      returning {
        id_blog
      }
    }
  }
`

const Form = ()=> {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const [createBlog] = useMutation(queryCreateBlog);
    const [content,setContent] = useState('')

    const onSubmit = async (data) => {
        let dataPost = {
            ...data,
            content_blog:content
        }
        await createBlog({variables:dataPost})
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-32 w-10/12 mx-auto grid grid-cols-12">
            {
                formData.map(({tag,name,label,type,placeholder,setting,layout,option,rows})=>{
                    switch(tag){
                        case "input":
                            return(
                                <div key={name} className={`m-1 mx-2 `+renderClassForSpan(layout)}>
                                    <label htmlFor={name} className="block nunito font-semibold text-global-dark-blue">{label}</label>
                                    <input {...register(name ,setting)} type={type} id={name} placeholder={placeholder} 
                                    className="w-full mt-2 shadow rounded p-2 outline-none text-black"/>
                                    {errors[name]&&<p className="text-red-600 mt-2 text-sm font-semibold">{errors[name].message}</p>}
                                </div>
                            )
                        case "select":
                            return(
                                <div key={name} className={`m-1 mx-2 `+renderClassForSpan(layout)}>
                                    <label htmlFor={name} className="block nunito font-semibold text-global-dark-blue">{label}</label>
                                    <select {...register(name,setting)} className="text-black outline-none shadow rounded mt-2 p-2 w-full">
                                        {
                                            option.map(({text,value})=><option value={value}>{text}</option>)
                                        }
                                    </select>
                                </div>
                            )
                        case "textarea":
                            return(
                                <div key={name} className={`m-1 mx-2 `+renderClassForSpan(layout)}>
                                    <label htmlFor={name} className="block nunito font-semibold text-global-dark-blue">{label}</label>
                                    <textarea {...register(name ,setting)} rows={rows} type={type} id={name} placeholder={placeholder} 
                                    className="w-full mt-2 shadow rounded p-2 outline-none"/>
                                    {errors[name]&&<p className="text-red-600 mt-2 text-sm font-semibold">{errors[name].message}</p>}
                                </div>
                            )
                        default:
                            break
                    }
                })
            }
            <MyReactQuill content={content} setContent={setContent}/>
            <input type="submit" className="cursor-pointer col-start-10 col-span-3
             justify-self-end shadow-sm rounded p-2 m-2 mt-5 text-white bg-blue-linear"
             />
        </form>
    ) ;
}

export default Form