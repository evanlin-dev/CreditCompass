// PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";

export default function PrivateRoute({ children }) {
  const [user] = useAuthState(auth);
  return user ? children : <Navigate to="/login" />;
}
