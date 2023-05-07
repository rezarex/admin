import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/login/Login"
import Resetpassword from './pages/resetpassword/Resetpassword'
import Dashboard from './pages/dashboard/Dashboard'
import Forgotpassword from './pages/forgotpassword/Forgotpassword'
import Baselayout from './components/baselayout/Baselayout'
import Messages from './pages/messages/Messages';
import Bloglist from './pages/bloglist/Bloglist';
import Blogcategories from './pages/blogcategories/Blogcategories';
import Skillslist from './pages/skilslist/Skillslist';
import Subscribers from './pages/subscribers/Subscribers';
import Members from './pages/members/Members';
import Addblogs from './pages/addblog/Addblogs';
import Projects from './pages/projects/Projects';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/reset-password' element={ <Resetpassword /> } />
      <Route path='/forgot-password' element={<Forgotpassword/>} />
      <Route path='/admin' element={ <Baselayout/> }>
        <Route index element={< Dashboard/>}/>
        <Route path='messages' element={< Messages/>}/>
        <Route path='projects' element={< Projects/>}/>
        <Route path='add-blogs' element={< Addblogs/>}/>
        <Route path='blog-list' element={< Bloglist/>}/>
        <Route path='blog-categories' element={< Blogcategories/>}/>
        <Route path='skills-list' element={< Skillslist/>}/>
        <Route path='subscribers' element={< Subscribers/>}/>
        <Route path='members' element={< Members/>}/>
      </Route>
    </Routes>
   </Router>
  );
}

export default App;
