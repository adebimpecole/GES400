import './App.css'
import Login from './Authentication Pages/Login'
import SignUp from './Authentication Pages/SignUp'
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Dashboard/Home';
import Manage from './Dashboard/Manage';
import Profile from './Dashboard/Profile';
import Tickets from './Dashboard/Tickets';
import CreateEvent from './Dashboard/CreateEvent';


function App() {

  return (
    <BrowserRouter>
      <>
          <Routes>
            <Route exact path='/dashboard' element={<Dashboard/>}/>
            <Route exact path='*' element={<Login/>}/>
            <Route exact path='/signup' element={<SignUp/>}/>
            <Route exact path='/home' element={<Home/>}/>
            <Route exact path='/manage' element={<Manage/>}/>
            <Route exact path='/profile' element={<Profile/>}/>
            <Route exact path='/ticket' element={<Tickets/>}/>
            <Route exact path='/event' element={<CreateEvent/>}/>
            
            {/* <Route exact path='/cart' element={<Cart/>}/>             */}
          </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
