import { useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

const GlobalCSS = createGlobalStyle`
    body {
        background: ${( {theme} ) => theme.body};
        color: ${( {theme} ) => theme.text};
    }
    a,h1,h2,h3,p,span,div,button{
        color:${( {theme} ) => theme.textWithInitial};
    }
    div{
        background: ${( {theme} ) => theme.body};
    }
    .bg-global-white{
        background: ${( {theme} ) => theme.body};
    }
    .text-global-dark-blue{
        color:${( {theme} ) => theme.darkBlue};
    }
    .text-global-gray{
        color:${( {theme} ) => theme.gray};
    }
    .shadow-custom{
        box-shadow:${( {theme} ) => theme.shadowCustom};
    }
`

const GlobalStyle = ()=>{
    const {value:theme} = useSelector((state)=>state.theme);
    return <GlobalCSS theme={theme}/>
}


export default GlobalStyle;