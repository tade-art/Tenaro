import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Landing from './Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* Add other routes like auth or dashboard later */}
      </Routes>
    </Router>
  );
}

export default App;