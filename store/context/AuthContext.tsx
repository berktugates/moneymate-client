import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext };
