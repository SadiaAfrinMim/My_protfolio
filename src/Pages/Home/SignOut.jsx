import React from 'react';
import { Link } from 'react-router-dom';

const SignOut = () => {
    return (
        <div>
             <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
        <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
          <div className='flex justify-center mx-auto'>
            
          </div>

          <p className='mt-3 text-xl text-center text-gray-600 '>
            Created an Account 
          </p>

        

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b  lg:w-1/4'></span>

            <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
              or Registration with email
            </div>

            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
          </div>
          <form >
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='name'
              >
                Username
              </label>
              <input
                id='name'
                autoComplete='name'
                name='name'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-purple-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-purple-300'
                type='text'
              />
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='photo'
              >
                Photo URL
              </label>
              <input
                id='photo'
                autoComplete='photo'
                name='photo'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-purple-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-purple-300'
                type='text'
              />
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='LoggingEmailAddress'
              >
                Email Address
              </label>
              <input
                id='LoggingEmailAddress'
                autoComplete='email'
                name='email'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-purple-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-purple-300'
                type='email'
              />
            </div>

            <div className='mt-4'>
              <div className='flex justify-between'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='loggingPassword'
                >
                  Password
                </label>
              </div>

              <input
                id='loggingPassword'
                autoComplete='current-password'
                name='password'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-purple-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-purple-300'
                type='password'
              />
            </div>
            <div className='flex text-sm items-center gap-4'> 
            <input type="checkbox" defaultChecked className="checkbox" />
            <p>By creating an account,I agree to the I agree to the   <span className='text-purple-600'> Terms of use </span>and <span className='text-purple-600'>Privacy Policy</span></p>
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='py-2 text-sm font-bold border border-purple-400 w-full text-purple-800 bg-gray-300 rounded-full'
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b  md:w-1/4'></span>

            <Link
              to='/signin'
              className='text-xs text-gray-500 uppercase  hover:underline'
            >
              or sign in
            </Link>

            <span className='w-1/5 border-b  md:w-1/4'></span>
          </div>
        </div>



     <div className='md:flex  hidden items-center justify-center'>
     <div className="flex-col  items-center justify-center">
  <span className="h-full  border-t border md:h-1/4"></span>

  <div>
  <a
    href="/signin"
    className="text-xs text-gray-500 uppercase hover:underline"
    aria-label="Sign in or continue"
  >
    or
  </a>
  </div>

  <span className="h-full border-t border border-purple-600 md:h-10"></span>
</div>

     </div>

      
        
        <div
          className=' hidden  lg:flex flex-col items-center justify-center bg-center  lg:w-1/2'

          
        >




            <div className='flex items-center justify-center gap-2'>
        <button className='py-1 px-4 border gap-3 justify-between flex items-center border-purple-500 rounded-full'> <img className='w-8' src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="" />LinkedIn</button>
        <button  className='py-1 px-4 border gap-3 justify-between flex items-center border-purple-500 rounded-full'><img className='w-8'  src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" />Google</button>
      </div>
        </div>
      </div>
    </div>
            
        </div>
    );
};

export default SignOut;