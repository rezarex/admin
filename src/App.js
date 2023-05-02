import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/login/Login"
import Resetpassword from './pages/resetpassword/Resetpassword'
import Dashboard from './pages/dashboard/Dashboard'
import Forgotpassword from './pages/forgotpassword/Forgotpassword'
import Baselayout from './components/baselayout/Baselayout'

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/reset-password' element={ <Resetpassword /> } />
      <Route path='/forgot-password' element={<Forgotpassword/>} />
      <Route path='/admin' element={ <Baselayout/> }>
        <Route index element={< Dashboard/>}/>
      </Route>
    </Routes>
   </Router>
  );
}

export default App;
