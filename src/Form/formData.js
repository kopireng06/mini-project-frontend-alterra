export const formData = [
    {
        tag:"input",
        name:"title_blog",
        label:"Title",
        type:"text",
        placeholder:"Title blog",
        layout:{
            base:12,
            md:6
        },
        setting:{
            required:{
                value:true,
                message:"harus diisi"
            },
            minLength:{
                value:10,
                message:"minimal 10 char"
            },
            maxLength:{
                value:30,
                message:"maksimal 30 char"
            },
        }
    },
    {   
        tag:"select",
        name:"categories_blog",
        label:"Categories blog",
        layout:{
            base:12,
            md:6
        },
        setting:{
            required:{
                value:true,
                message:"harus diisi"
            }
        },
        option:[
            {
                text:"React",
                value:1
            },
            {
                text:"Next",
                value:2
            }
        ]
    }
]

export const renderClassForSpan = (layout)=>{
    const listClassForSpan =[];
    for (let key in layout){
        if(key==="base"){
            listClassForSpan.push(`col-span-${layout[key]}`);
        }
        else{
            listClassForSpan.push(`${key}:col-span-${layout[key]}`);
        }
    }
    return listClassForSpan.join(" ");
}
