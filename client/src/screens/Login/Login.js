import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { authActions } from "../../redux/store";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //state
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  //handle input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //form handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("https://learnguitar.onrender.com/api/user/login", {
        email: inputs.email,
        password: inputs.password,
      });
      // const { data } = await axios.post("http://localhost:5000/api/user/login", {
      //   email: inputs.email,
      //   password: inputs.password,
      // });
      if (data.success) {
        localStorage.setItem("userId", data?.user._id);
        dispatch(authActions.login());
        toast.success("User login Successfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div class="wrapper">

      <div class="login_form">
        <div class="title">
          Login
        </div>
        <form onSubmit={handleSubmit}>
          <div class="form_wrap">
            <div className="input_grp2">

              <div class="input_wrap">
                <label for="email">Email Address</label>
                <input type="text" id="email" size="30" name="email" value={inputs.email} onChange={handleChange} />
              </div>

              <div class="input_wrap">
                <label for="password">Password</label>
                <input type="password" id="country" name="password" value={inputs.password} onChange={handleChange} />
              </div>
              </div>

              <div class="input_wrap">
                <button type='submit' className='submit_btn' >Login</button>
              </div>

              Don't have an account ?  <Link to='/register'>Register</Link>
          </div>
        </form>
        
      </div>
    </div>

  );
};

export default Login;
