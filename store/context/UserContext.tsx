import React, { createContext, useState } from "react";
import { IUser } from "@/models/IUser";

const UserContext = createContext();

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    password: "",
    terms: false,
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext };
