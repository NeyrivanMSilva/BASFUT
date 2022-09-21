/* COMPONENT FOR THE SIDEBAR */


import { Link } from "react-router-dom";
import "./components.css" 
function Menu() {

 

  return (
    <>
    
     <div className="col-md-3">  
        <div className="header_web">
          <div class="vertical-nav sidebar" >
            <ul class="nav flex-column p-0 mb-0 header_menu"  >
              <ul class="nav-item header_item" id="nav-item">
                <Link to="/">
                  <p className="menu_user">Todos os funcionários</p>
                </Link>
              </ul>
          {/*     <ul class="nav-item header_item" id="nav-item">
                <Link to="/AddEmployee">
                  <p className="menu_user">Adicionar funcionário</p>
                </Link>
              </ul> */}

            </ul>


          </div>
        </div>

       </div>  

    </>

  );
}

export default Menu;
