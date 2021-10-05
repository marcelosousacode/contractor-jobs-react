import './App.css';
import HomePage from './HomePage';
import ProfessionalList from './ProfessionalList';
import TopNav from './TopNav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <TopNav />
        <Routes>
          <Route exact path="/professionals" element={<ProfessionalList />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
