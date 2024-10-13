import { useState, useEffect } from 'react';
import { getUsers } from '../services/api';
import '../styles/Leaderboard.css';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((response) => {
      const sortedUsers = response.data.sort((a, b) => b.points - a.points);
      setUsers(sortedUsers);
    });
  }, []);

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Points</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.points}</td>
              <td>{index + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
