import React from 'react';

const Signin = () => {
    return (
        <div>

<div className="py-12">
  <div className=" flex-col ">
   
    <div className="bg-base-100 max-w-sm mx-auto shrink-0 rounded-lg shadow-2xl">
      <form className="card-body">
        <div className='text-center space-y-2'>
            <h1 className='font-bold text-3xl'>Login</h1>
            <p className='text-gray-700'>New To Design Space ? <span className='text-purple-700 font-bold'>sign up for free</span></p>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input type="email" placeholder="email" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-purple-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-purple-300" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input type="password" placeholder="password" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-purple-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-purple-300" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-purple-700 font-bold ">Forgot password?</a>
          </label>
        </div>
        <div className="form-control my-4">
          <button className="py-2 text-sm font-bold border-2 border-purple-400 text-purple-800 bg-gray-300 rounded-full">Login</button>
        </div>
        <div className='flex items-center justify-center gap-2'>
        <button className='btn rounded-full'> <img className='w-8' src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="" />LinkedIn</button>
        <button  className='btn rounded-full px-6'><img className='w-8'  src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" />Google</button>
      </div>
      </form>
    
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Signin;