import './App.css';
import HomePage from './HomePage';
import ProfessionalList from './ProfessionalList';
import TopNav from './TopNav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'
import { ProfessionalProfile } from './pages/ProfessionalProfile'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/professional-profile' element={<ProfessionalProfile />} />
          <Route exact path="/professionals" element={<ProfessionalList />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
