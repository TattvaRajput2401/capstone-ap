import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../api/auth';

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleLogout = React.useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/signin');
  }, [navigate]);

  useEffect(() => {
    const verifyUser = async () => {
      const storedToken = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');

      if (!storedToken || !storedUser) {
        navigate('/signin');
        return;
      }

      try {
        // Verify token with backend
        const response = await authAPI.verify();
        setUser(response.data.user);
        setToken(storedToken);
      } catch (err) {
        setError('Session expired. Please login again.');
        setTimeout(() => {
          handleLogout();
        }, 2000);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, [navigate, handleLogout]);

  const handleVerifyToken = () => {
    window.open(`https://jwt.io/#debugger-io?token=${token}`, '_blank');
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <div className="alert alert-error">{error}</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>🎉 Welcome to Your Dashboard!</h1>
        <p>You have successfully logged in</p>
      </div>

      <div className="user-info">
        <h3>User Information</h3>
        <div className="info-row">
          <span className="info-label">Name:</span>
          <span className="info-value">{user?.name}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Email:</span>
          <span className="info-value">{user?.email}</span>
        </div>
        <div className="info-row">
          <span className="info-label">User ID:</span>
          <span className="info-value">{user?.id}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Account Created:</span>
          <span className="info-value">
            {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
          </span>
        </div>
      </div>

      <div className="token-section">
        <h3>JWT Token</h3>
        <div className="token-display">
          {token}
        </div>
        <button 
          onClick={handleVerifyToken}
          className="btn-secondary"
          style={{ marginTop: '15px' }}
        >
          Verify Token on JWT.io
        </button>
      </div>

      <button 
        onClick={handleLogout}
        className="btn-logout"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
