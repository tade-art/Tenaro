import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Landing from './public/Landing';
import Auth from './public/UserAuth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;