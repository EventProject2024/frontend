import {Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.jsx';
import LogInPage from './pages/LogInPage/LogInPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';

function App() {

  return (
    <>
    <Routes>
      <Route path='/login' element={<LogInPage/>} />
      <Route path="/" element={<MainPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
    </Routes>
    </>
  )
}

export default App
