import React from 'react';

const Register = () => {
  return (
    <div className="min-w-screen min-h-screen bg-[#817885] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className="text-xl mb-3 front-bold">Welcome to E-commerce</h2>
          <p className="text-sm mb-3 front-medium">
            Please register your account
          </p>

        <form>
          <div className="flex flex-col w-full gap-1 mb-3">
            <label htmlFor="name">Name</label>
            <input
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
              className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
              type="text"
              name="password"
              placeholder="Password"
              id="password"
              required
            />
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
