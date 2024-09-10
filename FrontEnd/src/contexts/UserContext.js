/*
import React, { createContext, useState, useEffect } from 'react'; // Ensure useEffect is imported

// Create the UserContext
export const UserContext = createContext();

// Create the UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate fetching user data from an API or checking local storage
    const fetchedUser = { id: '123', name: 'John Doe' }; // This would be replaced with real logic
    setUser(fetchedUser);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

*/

// contexts/UserContext.js
/*
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Logic to fetch user data, e.g., from an API or local storage
    const fetchUser = async () => {
      // Replace with actual fetching logic
      const loggedInUser = await fetch('/api/user/me').then(res => res.json());
      setUser(loggedInUser);
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

*/