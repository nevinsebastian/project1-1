import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Import the home.css file

function Home() {
  return (
    <div className='formContainer'>
      <h1 className='pageTitle'>Mindful Campus</h1>
      <div className="tiles">
        <Link to="/mental-health" className="tile">
          <div className="card">
            <h3>Mental Health</h3>
            {/* Add mental health content */}
          </div>
        </Link>
        <Link to="/physical-health" className="tile">
          <div className="card">
            <h3>Physical Health</h3>
            {/* Add physical health content */}
          </div>
        </Link>
        <Link to="/menstrual-health" className="tile">
          <div className="card">
            <h3>Menstrual Health</h3>
            {/* Add menstrual health content */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
