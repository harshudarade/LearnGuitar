import React from 'react';
import "./home.css";
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='home'>
      <Navbar />

      <div className="content">
        <h1>Start Your Journey</h1>
        <p>
          Learning guitar is more about practice.
          <br />
          Grab your guitar and start playing!
        </p>
        <div>

          {
            !isLogin && <button type="button" onClick={()=> navigate("/login")}><span></span>Chords</button>
          }

          {
            isLogin && <button type="button" onClick={()=> navigate("/chords")}><span></span>Chords</button>
          } 

           <button type="button" onClick={()=> navigate("/songs")}><span></span>Songs</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

