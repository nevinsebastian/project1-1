import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Import the home.css file
import Logout from './Logout';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import mentalImage from './images/mental.jpg';
import physicalImage from './images/physi.jpg';
import menstrualImage from './images/menstrual.jpg';

function Home() {
  return (
    <div className='formContainer'>
      <div className='logout'>
        <Logout />
      </div>
      <h1 className='pageTitle'>Mindful Campus</h1>

    
        <div className="card-row">
        <Link className='litxt' to='/mentalhealth'>
        <div className="card" style={{ width: '18rem', height: '30rem', marginRight: '20px' }}>
          <img src={mentalImage} className="card-img-top" alt="..." />
          <div className="card-body">
          <h3>Mental health</h3>
            <p className="card-text">Talk to me about your problems, I won't judge you</p>
          </div>
          
        </div>
        </Link>
        
       <Link className='litxt' to='/physicalhealth'>
        <div className="card" style={{ width: '18rem', height: '30rem', marginRight: '20px' }}>
          <img src={physicalImage} className="card-img-top" alt="..." />
          <div className="card-body">
          <h3>Physical health</h3>
            <p className="card-text">Wanna gain or lose weight? Get personalised recommendations</p>
          </div>
        </div>
        </Link>
        
        <Link className='litxt' to='/menstrualhealth'>
        <div className="card" style={{ width: '18rem', height: '30rem' }}>
          <img src={menstrualImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3>Menstrual health</h3>
            <p className="card-text"> Are you experiencing pain during periods? Then open me up</p>
          </div>
        </div>
       </Link>
      </div>
    </div>
  );
}

export default Home;
