import React, { useState } from 'react';
import "./register.css";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  //state
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
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
      const { data } = await axios.post("https://learnguitar.onrender.com/api/user/register", {
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        email: inputs.email,
        password: inputs.password
      });
      if (data.success) {
        toast.success("User Register Successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div class="wrapper">

      <div class="registration_form">

        <div class="title">
          Registration Form
        </div>


        <form onSubmit={handleSubmit}>
          <div class="form_wrap">
            <div class="input_grp">


              <div class="input_wrap">
                <label for="fname">First Name</label>
                <input type="text" name="firstName" value={inputs.firstName} onChange={handleChange} required />
              </div>


              <div class="input_wrap">
                <label for="lname">Last Name</label>
                <input type="text" name="lastName" value={inputs.lastName} onChange={handleChange} required />
              </div>
            </div>

            <div className="input_grp2">
              
              <div class="input_wrap">
                <label for="email">Email Address</label>
                <input type="email" size="30" name="email" value={inputs.email} onChange={handleChange} required />
              </div>

              {/* <div class="input_wrap">
                <label for="city">City</label>
                <input type="text" name="city" value={inputs.city} onChange={handleChange} />
              </div> */}

              <div class="input_wrap">
                <label for="password">Password</label>
                <input type="password" name="password" value={inputs.password} onChange={handleChange} required />
              </div>
              </div>

              <div class="input_wrap">
                <button type='submit' className='submit_btn' >Register Now</button>
              </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
