import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Leaderboard App</h1>
      <ul>
        <li><Link to="/">Leaderboard</Link></li>
        <li><Link to="/claim-history">Claim History</Link></li>
        <li><Link to="/claim-points">Claim Points</Link></li>
        <li><Link to="/user-form">Add User</Link></li>
        <li><a href='https://www.linkedin.com/in/saichandanyadav/' target='_blank'>Follow Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
