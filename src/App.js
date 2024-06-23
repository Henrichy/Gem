import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Abouts from './Components/Abouts';
import Service from './Components/Service';
import Blogs from './Components/Blogs';
import Contacts from './Components/Contacts';
import Careers from './Components/Careers';
import InCareer from './Components/InCareer';
import Admin from './Components/Admin';
import ProtectedRoute from './Components/ProtectedRoute';
import Login from './Components/Login';
import { useState } from 'react';
import { createContext } from 'react';
import Privacy from './Components/Privacy';
import Inblog from './Components/Inblog';

export const AppContext = createContext();

function App() {
  const [jobid, setJobid] = useState('');

  return (
    <div className="App">
      <AppContext.Provider value={
        {
          value: [jobid, setJobid],
        }
      }>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<Abouts />} />
            <Route path='/services' element={<Service />} />
            <Route path='/blog' element={<Blogs />} />
            <Route path='/blogs/:blog' element={<Inblog />} />
            <Route path='/contact-us' element={<Contacts />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/careers/career' element={<InCareer />} />
            <Route path='/admin/login' element={<Login />} />
            <Route path='/privacy' element={<Privacy />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>

  );
}

export default App;
