import { createContext } from "react";

export const AuthContext = createContext({
  name: '',
  signIn: () => console.error('useContext has been used without Provider'),
  signOut: () => console.error('useContext has been used without Provider'),
});
