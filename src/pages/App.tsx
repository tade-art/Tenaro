import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Landing from './Landing';
import Login from './LogIn';
import SignUp from './SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;