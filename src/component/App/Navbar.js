import { Link,useHistory } from 'react-router-dom';
import loupe from './loupe.png'
import { useDispatch } from 'react-redux';
import { changeTheme } from '../GlobalState/themeSlice';
import { useRef, useState } from 'react';
import { useAuth } from '../GlobalState/Auth';
import { checkThemeModeFromLocalStorage } from '../GlobalState/themeSlice';

const Navbar = ()=>{

    const dispatch = useDispatch();
    const history = useHistory();
    const [theme,setTheme] = useState(checkThemeModeFromLocalStorage());
    const [iconTheme,setIconTheme] = useState('🌝');
    const inputSearch = useRef(null);
    const { user,signOut } = useAuth();
    const handleSignOut = async ()=>{
      await signOut();
      history.push('/login');
    }
    const LinkAdmin = ()=>{
      if(user){
        return(
          <Link to="#" className="relative montserrat text-global-dark-blue 
          text-sm md:text-xl font-bold mx-2 link-admin">
            admin
            <div className="dropdown-admin p-2 w-36 rounded-lg flex 
              flex-col absolute top-6 shadow-custom"
            >
              <Link to="/table-category-blog" className="montserrat text-global-dark-blue 
                  text-sm font-medium m-0.5"
              >
                  category
              </Link>
              <Link to="/table-blog" className="montserrat text-global-dark-blue text-sm 
                font-medium m-0.5"
              >
                blog
              </Link>
              <Link to="#" onClick={handleSignOut} className="montserrat text-global-dark-blue
                text-sm font-medium m-0.5"
              >
                logout
              </Link>
            </div>
          </Link>
        )
      }
      else{
        return null;
      }
    }

    const handleChangeTheme = ()=>{
      const themeWillBe = theme === "light" ? "dark" : "light";
      const iconWillBe  = theme === "light" ? "🌛" : "🌝";
      dispatch(changeTheme(themeWillBe));
      setTheme(themeWillBe);
      setIconTheme(iconWillBe);
    }

    const handleSubmitSearch = (e) =>{
      e.preventDefault();
      let valueSearch = inputSearch.current.value;
      if(valueSearch){
        history.push(`/blog/search/${valueSearch}`);
      }
    }

    return(
      <div className="w-full bg-global-white mx-auto px-5 md:py-3 fixed top-0 z-10">
        <nav className="h-16 flex justify-between items-center">
          <Link to="/" className="montserrat text-global-dark-blue text-sm md:text-xl font-bold">NGA</Link>
          <form onSubmit={handleSubmitSearch}>
            <LinkAdmin/>
            <Link to="/blog" className="montserrat text-global-dark-blue text-sm md:text-xl font-bold mx-2">blog</Link>
            <div className="relative inline-block mx-2 md:mx-3">
              <input ref={inputSearch} className="rounded-xl text-blue-dark text-sm md:text-xl 
                border-0 p-3 outline-none font-bold search-blog w-36 md:w-full" placeholder="search blog"
              />
              <img onClick={handleSubmitSearch} src={loupe} className="cursor-pointer h-8 md:h-10 p-2 
                rounded-lg bg-blue-dark absolute top-1.5 right-2" alt="cari blog" />
            </div>
            <span onClick={handleChangeTheme} className="text-xl md:text-3xl cursor-pointer">{iconTheme}</span>
          </form>
        </nav>
      </div>
    )
  }

export default Navbar;