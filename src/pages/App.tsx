import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import StartPage from './private/Start';
import Landing from './public/Landing';
import Auth from './public/UserAuth';
import RouteProtection from '../components/general/RouteProtection'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/private/start" element={<RouteProtection><StartPage /> </RouteProtection>} />
      </Routes>
    </Router>
  );
}

export default App;