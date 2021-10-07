import { useEffect, useRef,useState } from "react";

const useManageInput = (config) => {
    const ref = useRef();
    const [error,setError] = useState("");
    const [option,setOption] = useState([]);

    useEffect(()=>{
        let checkOption = ref.current?.querySelectorAll('input');
        let {defaultValue} = option
        defaultValue?.forEach((value)=>{
            for (let i=0; i<checkOption.length; i++) {
                if(checkOption[i].name === value){
                    checkOption[i].checked = true
                }
            }
        });
    },[option])

    const baseConfig = {
        ...config,
        refInput:ref,
        error:error,
        setError:setError,
    }
    if(config.type==="text" || config.type==="email" || config.type==="password"){
        return {
            ...baseConfig,
            getValue:()=>ref.current.value,
            setValue:(value)=>{
                ref.current.value=value
            }
        }
    }
    else if (config.type==="checkbox"){
        return {
            ...baseConfig,
            option:option,
            setOption:setOption,
            getValue:()=>{
                let checkOption = ref.current.querySelectorAll('input');
                let checked = [];
                for (let i=0; i<checkOption.length; i++) {
                    if(checkOption[i].checked){
                        checked.push({
                            id_categories:checkOption[i].value
                        })
                    }
                }
                return checked;
            }
        }
    }
}
 
export default useManageInput;