import { useState, useContext, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import FirebaseContext from '../context/firebase';

export default function Login() {
  const history = useNavigate
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress ] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvlaid = password == '' || emailAddress == '';

  const handleLogin = () => {};

  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);

  return (
    <div class="container flex mx-auto max-w-screen-md items-center h-screen">
      <div class="flex w-3/5">
        <img src='./images/iphone-with-profile.jpg' alt="image of user logged in on phone" />
      </div>
      <div class="flex flex-col w-2/5">
        <p>I will be the form</p>
      </div>
    </div>
  )
}