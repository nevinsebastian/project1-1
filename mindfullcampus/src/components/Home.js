import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <div className="tiles">
        <Link to="/mental-health" className="tile">
          <h3>Mental Health</h3>
          {/* Add mental health content */}
        </Link>
        <Link to="/physical-health" className="tile">
          <h3>Physical Health</h3>
          {/* Add physical health content */}
        </Link>
        <Link to="/menstrual-health" className="tile">
          <h3>Menstrual Health</h3>
          {/* Add menstrual health content */}
        </Link>
      </div>
    </div>
  );
}

export default Home;
