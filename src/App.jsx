import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, React, useEffect } from 'react';
import MainPage from './pages/MainPage/MainPage.jsx';
import LogInPage from './pages/LogInPage/LogInPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import IsLoading from './components/isLoading/isLoading.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import BookedEvents from './pages/BookedEvents/BookedEvents.jsx';
import ClientSearch from './pages/ClientSearch/ClientSearch.jsx';
import BookAnEvent from './pages/BookAnEvent/BookAnEvent.jsx';
function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const loadingPage = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };
    loadingPage();
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [location.pathname]);
  return (
    <>
      {loading ? <IsLoading /> :
        (<Routes>
          <Route path='/login' element={<LogInPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/bookedevents" element={<BookedEvents/>} />
          <Route path="/clientsearch" element={<ClientSearch/>} />
          <Route path="/bookanevent" element={<BookAnEvent />} />
        </Routes>)
      }

    </>
  )
}

export default App
