import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Leaderboard from './components/Leaderboard';
import ClaimHistory from './components/ClaimHistory.jsx';
import ClaimPoints from './components/ClaimPoints';
import UserForm from './components/UserForm';
import './App.css'

function App() {
  return (
    <div className='mobile-view'>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Leaderboard />} />
        <Route path="/claim-history" element={<ClaimHistory userId="yourUserId" />} />
        <Route path="/claim-points" element={<ClaimPoints />} />
        <Route path="/user-form" element={<UserForm />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
