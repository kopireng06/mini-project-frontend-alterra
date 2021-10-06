import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../GlobalState/themeSlice';
import { useState } from 'react';

const NavbarAdmin = ()=>{

    const dispatch = useDispatch();
    const [theme,setTheme] = useState("light");
    const [iconTheme,setIconTheme] = useState('🌝');

    const handleChangeTheme = ()=>{
      const themeWillBe = theme === "light" ? "dark" : "light";
      const iconWillBe  = theme === "light" ? "🌛" : "🌝";
      dispatch(changeTheme(themeWillBe));
      setTheme(themeWillBe);
      setIconTheme(iconWillBe);
    }

    return(
      <div className="w-full bg-global-white mx-auto px-5 md:py-3 fixed top-0">
        <nav className="h-16 flex justify-between items-center">
          <Link to="/" className="montserrat text-global-dark-blue text-sm md:text-xl font-bold">NGA</Link>
          <div>
            <Link to="/table-category-blog" className="montserrat text-global-dark-blue text-sm md:text-xl hidden md:inline font-bold mx-2">table-category</Link>
            <Link to="/table-blog" className="montserrat text-global-dark-blue text-sm md:text-xl hidden md:inline font-bold mx-2">table-blog</Link>
            <span onClick={handleChangeTheme} className="text-xl md:text-3xl cursor-pointer">{iconTheme}</span>
          </div>
        </nav>
      </div>
    )
  }

export default NavbarAdmin;