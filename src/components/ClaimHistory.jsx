import { useEffect, useState } from 'react';
import { getClaimHistory } from '../services/api';
import '../styles/ClaimHistory.css';


const ClaimHistory = ({ userId }) => {
    const [claimHistory, setClaimHistory] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClaimHistory = async () => {
            try {
                const response = await getClaimHistory(userId);
                setClaimHistory(response.data);
            } catch (err) {
                setError(err.response?.data?.message || 'This Feature is Not Available now!');
            }
        };

        fetchClaimHistory();
    }, [userId]);

    return (
        <div className="claim-history-container">
            <h2>Claim History</h2>
            {/*{error && <p className="error-message">{error}</p>}
            {claimHistory.length === 0 ? (
                <p>No claim history found for this user.</p>
            ) : (
                <table className="claim-history-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Points Earned</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {claimHistory.map((claim) => (
                            <tr key={claim._id}>
                                <td>{claim.userId.name}</td>
                                <td>{claim.pointsAwarded}</td>
                                <td>{new Date(claim.date).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}*/}
            <p> This Feature is currently unavailable.</p>
        </div>
    );
};

export default ClaimHistory;