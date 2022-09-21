/* ADD EMPLOYEE PAGE */
import "../pages.css"
import Menu from "../../components/menu.jsx"
import React from "react";
/* import Header from "../components/header";
import Alert from "../components/Alert" */
import { useAppContext } from "../../context/players/appContext.js"
import AddPlayerBox from "../../components/Players/addPlayer/addPlayerInfo";
import Sidenav from "../../components/sidenav/sidenav";
import Header from "../../components/header/header";

const AddPlayer = () => {



    return (
        <>

            <div className="row">
                <Header />
                <div className="container-box w-100"   >
                    <AddPlayerBox />
                </div>




            </div>


        </>

    );
}

export default AddPlayer;
