import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import Orders from './pages/Orders';
import Success from './pages/Success';
import TrackOrder from './pages/TrackOrder';
import Profile from './pages/Profile';
import AuthModal from './components/AuthModal';

function App() {
  return (
    <Router>
      <AuthModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store/:id" element={<Store />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/success" element={<Success />} />
        <Route path="/track" element={<TrackOrder />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
