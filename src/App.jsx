import {Link, Route,Routes} from "react-router-dom"
import {Home} from "./Home"
import { About } from "./about"
import { Contact } from "./Contact"
import "./App.css"
function App() {
  return (
    <>  
      <nav >
        <li><Link className="link" id="logo" to='/' >Kalvium ❤️</Link></li>
        <div className="left">
          <li> <Link className="link" to='/about'>Contacts</Link></li>
          <li> <Link className="link" to='/contact'>Register</Link></li>
        </div>
      </nav>  
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>

  )
}

export default App
