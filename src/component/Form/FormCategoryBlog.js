import { inputCategory } from "./InputConfig";
import { InputText } from "./InputCreator";
import useManageInput from "./useManageInput";
import { useMutation, useQuery } from "@apollo/client";
import { toast } from 'react-toastify';
import { useHistory, useParams } from "react-router";
import { useEffect } from "react";
import { mutationUpdateCategory,mutationInsertCategory,queryGetCategoryByID } from "./queryFormCategoryBlog";

const FormCategoryBlog = () => {

    const {id} = useParams();
    const categoryInput = useManageInput(inputCategory);
    const [insertCategory] = useMutation(mutationInsertCategory,{onCompleted:()=>handleSuccesSubmit()});
    const [updateCategory] = useMutation(mutationUpdateCategory,{onCompleted:()=>handleSuccesSubmit()});
    const {data:dataGetCategories,loading:loadingGetCategories} = useQuery(queryGetCategoryByID,{variables:{id_categories:id}});
    const notify = () => toast.success("Success !", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose:2000
    });

    useEffect(()=>{
        if(!loadingGetCategories && id){
            let {name_categories} = dataGetCategories.my_blog_categories[0];
            categoryInput.setValue(name_categories);
        }
    },[loadingGetCategories]);

    const handleSuccesSubmit = ()=>{
        notify();
        setTimeout(()=>{
            window.location.href = '/table-category-blog';
        },2000);
    }

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
        return canSubmit;
    }


    const onSubmit = (e)=>{
        e.preventDefault();
        let allConfig = [categoryInput];
        if(validateOnSubmit(allConfig)){
            if(id !== undefined){
                updateCategory({
                    variables:{
                        name_categories:categoryInput.getValue(),
                        id_categories:id
                    }
                })
            }
            else{
                insertCategory({variables:{
                    name_categories:categoryInput.getValue()
                }});
            }
        }
    }

    return ( 
        <form onSubmit={onSubmit} className="my-24 lg:container mx-auto">
            <div className="max-w-xl mx-auto grid grid-cols-12">
                <InputText {...categoryInput}/>
                <input type="submit" className="cursor-pointer col-start-10 col-span-3
                justify-self-end shadow-sm rounded p-2 m-2 mt-5 text-white bg-blue-linear"
            />
            </div>
        </form>
    );
}
 
export default FormCategoryBlog;