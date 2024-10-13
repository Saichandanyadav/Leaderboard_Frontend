import { useState, useEffect } from 'react';
import { getUsers, claimPoints } from '../services/api';
import '../styles/ClaimPoints.css';

const ClaimPoints = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [pointsAwarded, setPointsAwarded] = useState(null);

  useEffect(() => {
    getUsers().then((response) => setUsers(response.data));
  }, []);

  const handleClaim = () => {
    claimPoints(selectedUser).then((response) => {
      setPointsAwarded(response.data.points);
    });
  };

  return (
    <div className="claim-points">
      <h2>Claim Points</h2>
      <select onChange={(e) => setSelectedUser(e.target.value)}>
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
      <button onClick={handleClaim}>Claim Points</button>
      {pointsAwarded && <p>Points Awarded: {pointsAwarded}</p>}
    </div>
  );
};

export default ClaimPoints;
