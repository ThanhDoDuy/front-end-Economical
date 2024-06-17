import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(state)
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#817885] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className="text-xl mb-3 front-bold">Welcome to E-commerce</h2>
          <p className="text-sm mb-3 front-medium">
            Please register your account
          </p>

          <form onSubmit={submit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                onChange={inputHandler}
                value={state.name}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                type="text"
                name="name"
                placeholder="Name"
                id="name"
                required
              />
            </div>

            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                onChange={inputHandler}
                value={state.email}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                type="text"
                name="email"
                placeholder="Email"
                id="email"
                required
              />
            </div>

            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                onChange={inputHandler}
                value={state.password}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                required
              />
            </div>

            <div className="flex items-center w-fulll gap-3 mb-3">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 border-gray-300 focus"
                type="checkbox"
                name="checkbox"
                placeholder="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox">I agree with the privacy policy</label>
            </div>

            <button
              className='bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'
            >Sign Up</button>


            <div className="flex items-center justify-center gap-3 mb-3">
              <p>Already has an account ? 
                <Link
                  className='front-bold text-inherit bg-transparent border-none cursor-pointer text-lg hover:text-black hover:underline'
                  to="/login"
                > Sign in</Link>
              </p>
            </div>

            <div className="w-full flex items-center justify-center mb-3">
              <div className='w-[45%] bg-slate-700 h-[1px]'></div>
              <div className='w-[10%] flex items-center justify-center'>
                <span className='pb-1'>Or</span>
              </div>
              <div className='w-[45%] bg-slate-700 h-[1px]'></div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div
                className='w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg
                 hover:shadow-orange-700/50 justify-center cursor-pointer
                 items-center overflow-hidden'>
                <span className='pb-1'><FaGoogle /></span>
              </div>
              <div
                className='w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg
                 hover:shadow-orange-700/50 justify-center cursor-pointer
                 items-center overflow-hidden'>
                <span className='pb-1'><FaFacebook /></span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
