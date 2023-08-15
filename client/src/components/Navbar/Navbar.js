import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./navbar.css"
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from "../../redux/store";
import toast from "react-hot-toast";

const Navbar = () => {
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  //logout
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("Logout successfully");
      navigate("/");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className='hero'>
        <nav>
            <h2 className='logo'>LearnGuitar</h2>
            <ul >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/chords">Chords</Link></li>
                <li><Link to="/songs">Songs</Link></li>
                {/* <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li> */}
                <li><Link to="/contact">Contact</Link></li>

            </ul>
          {!isLogin && (<>
            <button className='navButton' type="button" onClick={()=> navigate('/login')}>Login</button>
            
          </>)
          }
          {
            isLogin && (
              <button onClick={handleLogout} className='navButton' type="button">Logout</button>
            )
          }
        </nav>
    </div>
  )
}

export default Navbar
