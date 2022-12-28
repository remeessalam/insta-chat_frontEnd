import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login/Login'
import Signup from './components/register/signUp'
import HomePage from '../src/pages/homepage'
import Profile from '../src/pages/profilePage'
import Chatpage from './pages/chatpage'
import { GoogleOAuthProvider } from '@react-oauth/google';
import io from "socket.io-client";
function App() {
  const Socket = io.connect("http://localhost:4000");
  return (
    <div>
      <GoogleOAuthProvider clientId="117584395273-oljruplarl1md005un2cv7rmkvf11so6.apps.googleusercontent.com">
        <BrowserRouter>
          <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/chat' element={<Chatpage socket={Socket} />} />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </div>
  )
}

export default App;
