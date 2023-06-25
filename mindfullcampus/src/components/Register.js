import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link} from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();


    try {
        const data = {
          email: email,
          password: password,
          
        };
  
        const response = await fetch('http://localhost:8000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          const result = await response.json();
        
          navigate('/login');
        } else {
          throw new Error('data error');
        }
      } catch (error) {
        console.log(error);
      }



  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Mindful campus</span>
        <span className="title">Register</span>

        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign up</button>
        </form>
        <p>Have an account already? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
