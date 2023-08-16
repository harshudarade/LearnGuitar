import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./song.css";

const Song = () => {
  const [song, setSong ] = useState({
    name : "",
    chords : [],
    capo : "",
    imageUrl : "",
    userOwner : 0
  })

  const handleChange = (event) => {
    const {name, value} = event.target;
    setSong({
      ...song, [name] : value
    });
  };

  const handleChordChange = (event, idx) => {
    const {  value } = event.target;
    const chords = song.chords;
    chords[idx] = value;
    setSong({
      ...song, chords
    });
    console.log(song);
  }

  const addChord = () => {
    setSong({
      ...song,
      chords: [...song.chords, ""]
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/songs" , song);
      alert("Song Added");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
 
  return (
    <div class="wrapper">

      <div class="login_form">
        <div class="title">
          Add Song
        </div>
        <form>
          <div class="form_wrap">
            <div className="input_grp2">

              <div class="input_wrap">
                <label for="name">Name : </label>
                <input type="text" name="name"  />
              </div>

              <div class="input_wrap">
                <label for="chords">Chords : </label>
                {song.chords.map((chords, idx) => (
                  <input key={idx} type='text' name="chords" value={chords} onChange={(event) => handleChordChange(event, idx)} />
                ))}
                <button onClick={addChord} className='submit_btn' type='button'>
                  Add Chord
                </button>
              </div>

              <div class="input_wrap">
                <label for="name">Capo : </label>
                <input type="text" name="image"  />
              </div>

              <div class="input_wrap">
                <label for="image">Image URL : </label>
                <input type="text" name="image"  />
              </div>
             
              </div>

              <div class="input_wrap">
                <button type='submit' className='submit_btn' >Add Song</button>
              </div>

          </div>
        </form>
        
      </div>
    </div>

  );
};

export default Song;

