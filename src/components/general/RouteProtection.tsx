import { Navigate } from 'react-router-dom';

export default function RouteProtection({ children }: { children: JSX.Element }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/" replace />;
}
