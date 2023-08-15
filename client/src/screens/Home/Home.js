import React from 'react';
import "./home.css";
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
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
          <button type="button" onClick={()=> navigate("/chords")}><span></span>Chords</button>
           <button type="button" onClick={()=> navigate("/songs")}><span></span>Songs</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

