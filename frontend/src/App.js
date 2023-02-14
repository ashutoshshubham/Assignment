import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Home';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import SignUp from './components/SignUp';
import AboutUs from './components/AboutUs';
import UserProfile from './components/UserProfile';
import ProfileSetup from './components/ProfileSetup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Navigate to='/homepage' />} path='/' />
          <Route element={<Home />} path='/homepage' />
          <Route element={<Login />} path='/login' />
          <Route element={<SignUp />} path='/signup' />
          <Route element={<ContactUs />} path='/contactus' />
          <Route element={<AboutUs />} path='/aboutus' />
          <Route element={<UserProfile />} path='/user' />
          <Route element={<ProfileSetup />} path='/setup' />
          <Route element={<NotFound />} path='*' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
