//import navbar from bootstrap
import {Navbar} from 'react-bootstrap'
import logo from '../images/logo.svg'

function Nav (){
      return(
<>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
     CheckPoint React State
    </Navbar.Brand>
  </Navbar>
</>)}
export default Nav;