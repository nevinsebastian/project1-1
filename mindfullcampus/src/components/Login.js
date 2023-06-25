import React, { useState } from 'react';
import axios from 'axios';
import './login.css'
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('username', email);
      formData.append('password', password);
  
      const response = await axios.post('http://127.0.0.1:8000/login', formData);
  
      // Save the token received from the backend to local storage
      localStorage.setItem('token', response.data.access_token);
      
     
      // Redirect to the desired page (e.g., Home)
      // You can use the useHistory hook from 'react-router-dom' for redirection
      // Example: useHistory().push('/home');
     navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Mindful campus</span>
        <span className="title">Login</span>

        <form onSubmit={handleLogin}>
          <input
            type="text"
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

          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};
export default Login;