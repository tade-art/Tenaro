import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RouteProtection from '../components/general/RouteProtection';
import StartPage from './private/Start';
import Tasks from './private/Tasks';
import Landing from './public/Landing';
import Auth from './public/UserAuth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/start" element={<RouteProtection><StartPage /> </RouteProtection>} />
        <Route path="/tasks" element={<RouteProtection><Tasks /> </RouteProtection>} />
      </Routes>
    </Router>
  );
}

export default App;