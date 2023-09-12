import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AccountSettingsPage from './components/dashboard/AccountSettings';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import CoursesId from './pages/CoursesId';
import Dashboard from './pages/Dashboard';
import FAQ from './pages/FAQ';
import ForgotPassword from './pages/ForgotPassword';
import Gallery from './pages/Gallery';
import GalleryDetails from './pages/GalleryDetails';
import Home from './pages/Home';
import Login from './pages/Login';
import New from './pages/New';
import Online from './pages/Online';
import Portfolio from './pages/Portfolio';
import Registration from './pages/Registration';
import ServiceDetails from './pages/ServiceDetails';
import Tutor from './pages/Tutor';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    //localStorage.removeItem("user")
    if (token) {
      setToken(token);
      return;
    }
    setToken('');
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CoursesId />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<GalleryDetails />} />
        <Route path="/tutor/:id" element={<Tutor />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={token ? <Dashboard /> : <Login />} />
        <Route
          path="/dashboard/timetable"
          element={token ? <New /> : <Login />}
        />
        <Route
          path="/dashboard/online"
          element={token ? <Online /> : <Login />}
        />
        <Route
          path="/dashboard/settings"
          element={token ? <AccountSettingsPage /> : <Login />}
        />
      </Routes>
    </Router>
  );
}

export default App;
