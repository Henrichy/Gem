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


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Abouts />} />
          <Route path='/services' element={<Service />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/contact-us' element={<Contacts />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/careers/career' element={<InCareer />} />
          <Route path='/admin/login' element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute />}>
            <Route index element={<Admin />} />
          </Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
