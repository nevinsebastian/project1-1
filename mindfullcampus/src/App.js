import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/authpages/Login';
import Register from './components/authpages/Register';
import Home from './components/home/Home';
import Physicalhealth from './components/physical/Physicalhealth';
import Result from './components/Result';

import MenstrualHealthPage from './components/menstrual/Menstrual';

import Chatbot from './components/chat/Chatbot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path='/physicalhealth' element={<Physicalhealth />}/>
        <Route path='/physicalhealth/result' element={<Result />}  />
        <Route path='/mentalhealth' element={<Chatbot/>}/>
        <Route path='/menstrualhealthpage' element={<MenstrualHealthPage />} />

      </Routes>
    </Router>
  );
}

export default App;
