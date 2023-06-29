import './App.css'
import Login from './Authentication Pages/Login'
import SignUp from './Authentication Pages/SignUp'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <>
          <Routes>
            {/* <Route exact path='*' element={<Home/>}/> */}
            <Route exact path='*' element={<Login/>}/>
            <Route exact path='/signup' element={<SignUp/>}/>
            
            {/* <Route exact path='/dashb' element={<Dashboard/>}/> */}
            
            {/* <Route exact path='/cart' element={<Cart/>}/>             */}
          </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
