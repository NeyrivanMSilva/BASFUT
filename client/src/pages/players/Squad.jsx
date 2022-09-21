/* ADD EMPLOYEE PAGE */
import "../../App.css"
import Menu from "../../components/menu.jsx"
import React from "react";
/* import Header from "../components/header";
import Alert from "../components/Alert" */
import { useAppContext } from "../../context/players/appContext.js"
import AddPlayerBox from "../../components/Players/addPlayer/addPlayerInfo.jsx";
import Sidenav from "../../components/sidenav/sidenav";
import Header from "../../components/header/header";
import TeamMembers from "../../components/Players/Squad/teamMembers";
import Stats from "../../components/Players/Squad/Stats";
const Squad = () => {



    return (
        <>
            <div class="container-fluid squad-page p-0">
                <Header />
                {/* <div className="row">
         
           <div className="container-box w-100"   >
              <TeamMembers />
            </div> */}
                <div class="container-fluid squad-box ">
                    <div class="row w-100 m-0">
                  
                            <TeamMembers />
                  
                            <Stats />
                        
                    </div>
                </div>

                {/* </div> */}
            </div>



        </>

    );
}

export default Squad;
