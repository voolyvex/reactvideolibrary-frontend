import React from "react";
import useAuth from "../../hooks/useAuth";

const HomePage = () => {
  
  const [user] = useAuth();

  return (
    <div className="container">
      <h1>Welcome, {user.first_name}!</h1>
    </div>
  );
};

export default HomePage;
