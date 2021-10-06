import {useEffect, useRef} from 'react';
import hljs from 'highlight.js/lib/index';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/stackoverflow-dark.css';
import './HightLight.css';

hljs.registerLanguage('javascript', javascript);

const HighLight = ({content})=>{

    const nodeRef = useRef();

    //fungsi untuk menghighlight suatu dom
    const highlight = () => {
        if (nodeRef) {
            const nodes = nodeRef.current.querySelectorAll('pre');
            nodes.forEach((node) => {
                hljs.highlightBlock(node);
            });
        }
    }
    
    useEffect(()=>{
        highlight();
    })

    return(
        <div className="mt-10" ref={nodeRef} dangerouslySetInnerHTML={{ __html: content }} />
    )

}   

export default HighLight;