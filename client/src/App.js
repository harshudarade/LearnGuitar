import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";

import Register from "./screens/Register/Register";
import Login from "./screens/Login/Login";
import Chords from './screens/Chords/Chords';
import Songs from './screens/Songs/Songs';
import Song from "./screens/Songs/Song";


import A from "./screens/SingleChord/aChord";
import Am from "./screens/SingleChord/amChord";
import B from "./screens/SingleChord/bChord";
import Bm from "./screens/SingleChord/bmChord";
import C from "./screens/SingleChord/cChord";
import Cm from "./screens/SingleChord/cmChord";
import D from "./screens/SingleChord/dChord";
import Dm from "./screens/SingleChord/dmChord";
import E from "./screens/SingleChord/eChord";
import Em from "./screens/SingleChord/emChord";
import F from "./screens/SingleChord/fChord";
import Fm from "./screens/SingleChord/fmChord";
import G from "./screens/SingleChord/gChord";
import Gm from "./screens/SingleChord/gmChord";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
        
        <Routes>
          <Route path="/chords" element={<Chords/>}></Route>
        </Routes>

        <Routes>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
                
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>

        <Routes>
          <Route path="/songs" element={<Songs/>}></Route>
        </Routes>

        <Routes>
          <Route path="/song" element={<Song />}></Route>
        </Routes>

        {/* Chord Route */}

        <Routes>
          <Route path="/chords/a" element={<A />}></Route>
        </Routes>

        <Routes>
          <Route path="/chords/am" element={<Am />}></Route>
        </Routes>

        <Routes>
          <Route path="/chords/b" element={<B />}></Route>
        </Routes>

        <Routes>
          <Route path="/chords/bm" element={<Bm />}></Route>
        </Routes>

        <Routes>
          <Route path="/chords/c" element={<C />}></Route>
        </Routes>

        <Routes>
          <Route path="/chords/cm" element={<Cm />}></Route>
        </Routes>

        <Routes>
          <Route path="/chords/d" element={<D />}></Route>
        </Routes>

        <Routes>
          <Route path="/chords/dm" element={<Dm />}></Route>
        </Routes>

        <Routes>
          <Route path="/chords/e" element={<E />}></Route>
        </Routes>

        <Routes>
          <Route path="/chords/em" element={<Em />}></Route>
        </Routes>

        <Routes>
          <Route path="/chords/f" element={<F />}></Route>
        </Routes>

        <Routes>
          <Route path="/chords/fm" element={<Fm />}></Route>
        </Routes>


        <Routes>
          <Route path="/chords/g" element={<G />}></Route>
        </Routes>

        <Routes>
          <Route path="/chords/gm" element={<Gm />}></Route>
        </Routes>

        

      </Router>

    </div>
  );
}

export default App;
