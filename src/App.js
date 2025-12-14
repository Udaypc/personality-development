
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { FindCoach } from './components/FindCoach';
import { About } from './components/About';
import { Communication } from './components/Communication/communication';
import { Individual } from './components/Individual/individual';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Career } from './components/Career/career';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/find-coach" element={<FindCoach />} />
          <Route path="/about" element={<About />} />
          <Route path="/individual" element={<Individual />} />
          <Route path="/career" element={<Career />} />
          <Route path="/communication" element={<Communication />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
