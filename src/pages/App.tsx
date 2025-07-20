import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PrivHome from './private/Homepage';
import Landing from './public/Landing';
import Auth from './public/UserAuth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/private/homepage" element={<PrivHome />} />
      </Routes>
    </Router>
  );
}

export default App;