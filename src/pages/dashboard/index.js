import React from 'react';
import { useAuth } from '../../context/auth/index';

const Dashboard = () => {
  const {logOut} = useAuth()

  const handleClick = ()=>{
    logOut()
  }
  return (
    <div>
      <h1>You are logged in so can see this</h1>
      <button onClick={handleClick}>LogOut</button>
    </div>
  );
};

export default Dashboard;
