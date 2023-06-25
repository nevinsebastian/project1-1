import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Physicalhealth from './components/Physicalhealth';
import Result from './components/Result';
import Chat from './components/chat/Chat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path='/physicalhealth' element={<Physicalhealth />}/>
        <Route path='/physicalhealth/result' element={<Result />}  />
        <Route path='/mentalhealth' element={<Chat />}/>

      </Routes>
    </Router>
  );
}

export default App;
