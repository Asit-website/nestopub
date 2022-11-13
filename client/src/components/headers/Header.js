import React,{useState} from 'react';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import HomePop from '../mainPages/home/HomePop';
const Header = ({pop,setPop}) => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)
  const [navColor,setNavColor]=useState(false);
  const [same,setSame] = useState("popup-container");
  const changeNavColor =()=>{
      if(window.scrollY >= 0){
          setNavColor(true)
      }
      else{
          setNavColor(false)
      }

  }
  window.addEventListener('scroll' ,changeNavColor);

//   hi

  return (
    <>
    <div className={navColor ? 'header activeH' : 'header' }>
    <nav className='navbar'>
        <NavLink to="/" exact   className='logo'>
            <img src={logo} alt='logo' />
        </NavLink>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<i className="fa-solid fa-xmark"></i>)
                : (<i className="fa-solid fa-bars"></i>)}

        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li  className='nav-item'>
                <NavLink to="/login"  exact onClick={closeMenu}>Why Join Nestohub?</NavLink>
            </li>
            <li  className='nav-item'>
                <a href="!#"   onClick={closeMenu}>Agent Case Studies</a>
            </li>
            <li  className='nav-item'>
             <span onClick={() => setPop(true)}> <button className="btn-primary "  onClick={closeMenu}>Register Now for FREE</button></span>
            </li>
        </ul>
    </nav>
</div>
{
    pop && <HomePop type={same} setType ={setSame}  setPop={setPop}/>
}
</>
  )
}

export default Header