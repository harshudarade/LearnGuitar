import React from 'react';
import { Link } from 'react-router-dom';

import './chords.css';

const Chords = () => {
  return (
    <div className='homeChord'>
      
      

      <div className="contentChord">
        <h1>Practice Chords</h1>
        <p>
          Learning Chords is initially Hard
          <br />
          But :)
          <br />
          <br />
          Grab your guitar and start playing!
          <br />
          __________________________________________
        </p>
        <div>
            <Link to = "/chords/c">
            <button type="button"><span></span>C</button>
            </Link>

            <Link to = "/chords/cm">
            <button type="button"><span></span>Cm</button>
            </Link>

            <Link to = "/chords/d">
            <button type="button"><span></span>D</button>
            </Link>

            <Link to = "/chords/dm">
            <button type="button"><span></span>Dm</button>
            </Link>
            
            <Link to = "/chords/e">
            <button type="button"><span></span>E</button>
            </Link>
          
          
        </div>
        
        <div>
            <Link to = "/chords/em">
            <button type="button"><span></span>Em</button>
            </Link>

            <Link to = "/chords/f">
            <button type="button"><span></span>F</button>
            </Link>

            <Link to = "/chords/fm">
            <button type="button"><span></span>Fm</button>
            </Link>

            <Link to = "/chords/g">
            <button type="button"><span></span>G</button>
            </Link>

            <Link to = "/chords/gm">
            <button type="button"><span></span>Gm</button>
            </Link>
            
            
        </div>
        <div>

            <Link to = "/chords/a">
            <button type="button"><span></span>A</button>
            </Link>

            <Link to = "/chords/am">
            <button type="button"><span></span>Am</button>
            </Link>

            <Link to = "/chords/b">
            <button type="button"><span></span>B</button>
            </Link>

            <Link to = "/chords/bm">
            <button type="button"><span></span>Bm</button>
            </Link>
            
        </div>
        
        <div>
            
        
        </div>
      </div>
    </div>
  );
};

export default Chords;
