import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RouteProtection from '../components/general/RouteProtection';
import Dashboard from './private/Dashboard';
import Pomodoro from './private/Pomodoro';
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
        <Route path="/timer" element={<RouteProtection><Pomodoro /> </RouteProtection>} />
        <Route path="/analytics" element={<RouteProtection><Dashboard /> </RouteProtection>} />
      </Routes>
    </Router>
  );
}

export default App;