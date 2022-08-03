import { useState, useContext, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import FirebaseContext from '../context/firebase';

export default function Login() {
  const history = useNavigate
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress ] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password == '' || emailAddress == '';

  const handleLogin = () => {};

  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src='./images/iphone-with-profile.jpg' alt="image of user logged in on phone" />
      </div>
      <div className="flex flex-col w-2/5">
        <div className='flex flex-col items-center bg-white p-4 border-border-gray-primary mb-4 rounded'>
          <h1 className="flex justify-center-w-full">
            <img src="./images/logo.png" alt="Instagram logo" className="at-2 w-6/12 ab-4" />
          </h1>
          {error && <p className="ab=4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={handleLogin} method="POST">
            <input
            aria-label="Enter your email address"
            type="text"
            placeholder='Email address'
            className="text-sm text-gray-base m-full mr-3 py-5 px-4 h-2 border-border-fray-primary rounded ab-2"
            onChange={({target}) => setEmailAddress(target.value)}
            />
            <input
            aria-label="Enter your password"
            type="password"
            placeholder='Password'
            className="text-sm text-gray-base m-full mr-3 py-5 px-4 h-2 border-border-fray-primary rounded ab-2"
            onChange={({target}) => setPassword(target.value)}
            />
            <button 
            disabled={isInvalid}
            type="submit"
            className={`bg-blue-500 text-black w-full rounded h-8 font-bold 
            ${isInvalid && 'opacity-50'}`}>
            Login
            </button>
          </form>
        </div>
        <div className='flex justify-center items-center flex-col w-full bg-white p-4 border-border-gray-primary'>
          <p className='text-sm'>Don't have an account?{` `} <Link to="/signup" className="font-bold text-blue-medium">Sign Up</Link></p>
        </div>
      </div>
    </div>
  )
}