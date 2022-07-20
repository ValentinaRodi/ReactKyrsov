/* eslint-disable import/no-cycle */
import React, {
  useEffect, useRef, useState, useContext,
} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/useContext';
import Header from './Header';
import Footer from './Footer';

export default function LoginPass() {
  const { context, setContext } = useContext(Context);
  console.log(context, 'email');

  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');

  const emailRegex = /@com/;

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const signInAndFocus = (e) => {
    if (!ref1.current.value) {
      ref1.current.focus();
      setMessage('Введите логин');
      ref1.current.style.border = '2px solid red';
      e.preventDefault();
    } else if (!emailRegex.test(ref1.current.value)) {
      ref1.current.focus();
      setMessage('Логин должен содержать: @com!');
      ref1.current.style.border = '2px solid red';
      e.preventDefault();
    } else {
      setMessage('');
      ref1.current.style.border = '';
    }

    if (!ref2.current.value) {
      ref2.current.focus();
      setMessage2('Введите пароль!');
      ref2.current.style.border = '2px solid red';
      e.preventDefault();
    } else if (ref2.current.value.length < 6) {
      ref2.current.focus();
      setMessage2('Пароль должен быть больше 6 символов!');
      ref2.current.style.border = '2px solid red';
      e.preventDefault();
    } else {
      setMessage2('');
      ref2.current.style.border = '';
    }
    const userInfo = { email: ref1.current.value, name: '', phone: '' };
    setContext([userInfo]);
  };
 
  return (
    <div>
      <Header />
      <input type="email" placeholder="Логин" ref={ref1} />
      <div>{message}</div>
      <input type="password" placeholder="Пароль" ref={ref2} />
      <div>{message2}</div>
      <Link to="/MainPage">
        <input type="button" value="Вход" onClick={signInAndFocus} />
      </Link>
      <Footer />
    </div>
  );
}
