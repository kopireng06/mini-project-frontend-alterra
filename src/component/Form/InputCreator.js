const renderClassForSpan = (layout)=>{
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

export const InputText = ({name,label,placeholder,layout,error,refInput,type})=>{
    return (
        <div className={`m-1 mx-2 `+renderClassForSpan(layout)}>
            <label htmlFor={name} className="block nunito font-semibold text-global-dark-blue">{label}</label>
            <input ref={refInput} type={type} id={name} placeholder={placeholder} 
            className="w-full mt-2 shadow rounded p-2 outline-none text-black"/>
            {error ? <p className="text-red-600 mt-2 text-sm font-semibold">{error}</p>:<p></p>}
        </div>
    )
};

export const InputCheckBox = ({label,layout,error,refInput,option}) => {
    return (  
        <div ref={refInput} className={`m-1 mx-2 `+renderClassForSpan(layout)}>
            <label className="block nunito font-semibold text-global-dark-blue">{label}</label>
            {
                option.checkOption?.map(({name_categories,id_categories})=>
                    <div key={id_categories} className="flex items-center my-2">
                        <input key={id_categories} type="checkbox" className="w-5 h-5" id={name_categories}
                         name={name_categories} value={id_categories} />
                        <label htmlFor={name_categories} className="mx-2">{name_categories}</label>
                    </div>
                )
            }
            {error ? <p className="text-red-600 mt-2 text-sm font-semibold">{error}</p>:<p></p>}
        </div>
    );
}
