/* COMPONENT FOR THE SIDEBAR */


import { Link } from "react-router-dom";
import "./header.css"
 
function Header() {



  return (
    <>
      <div className="container-fluid header-container">
        <div className="row">
          <div className="col-md-3">
            <img src="./benfica.png" className="h-25" />
          </div>
          <div className="col-md-6">

          </div>
          <div className="col-md-3">

          </div>
        </div>
      </div>

      <nav class="navbar navbar-expand-lg navbar-light">
       
        <div class="collapse navbar-collapse h-100 ml-5" id="navbarNav">
          <ul class="navbar-nav h-100 align-items-center">
          <Link to="/players" className="nav-link-container">
              <p class="nav-link-header" >Team </p>
          </Link>
          <Link to="/" className="nav-link-container">
               <p class="nav-link-header" >Players </p>
        
              </Link>
              <Link to="/teamtraining" className="nav-link-container">
               <p class="nav-link-header" >Workouts </p>
          
              </Link>
              <Link to="/" className="nav-link-container">
               <p class="nav-link-header" >Schedule </p>
           
              </Link>
          </ul>
        </div>
      </nav>


    </>

  );
}

export default Header;