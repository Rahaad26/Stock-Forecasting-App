import React from "react";
import "./profile.css";
function UserProfile() {
  const user = {
    username: "John Doe",
    accountType: "Individual",
    profilePicture: "https://via.placeholder.com/150", // Placeholder image
    portfolioValue: 100000.0,
    cashBalance: 25000.0,
  };

  return (
    <div className="user-profile">
      <div className="Left">
        <div className="user-info">
          <img
            src={user.profilePicture}
            alt="Profile Picture"
            className="profile-picture"
          />
          <div className="user-details">
            <h2>{user.username}</h2>
            <p>Account Type: {user.accountType}</p>
          </div>
        </div>
      </div>

      <div className="Reght">
        <div className="portfolio-summary">
          <h2>Portfolio Summary</h2>
          <ul>
            <li>Total Value: ${user.portfolioValue.toFixed(2)}</li>
            <li>Cash Balance: ${user.cashBalance.toFixed(2)}</li>
          </ul>
        </div>
        <div className="action-buttons">
          <button>Cash In</button>
          <button>Withdrawal</button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
