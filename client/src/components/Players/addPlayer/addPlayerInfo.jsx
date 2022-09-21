/* ADD EMPLOYEE PAGE */
import "../Players.css"
/* import Menu from "../components/menu.jsx" */
import React from "react";
/* import Header from "../components/header"; */
/* import Alert from "../components/Alert" */
import { useAppContext } from '../../../context/players/appContext.js'
import Personal from "./Personal";
import Professional from "./Professional";
import Stats from "./Stats";
import Alert from "../../Alert.js";

const AddPlayerBox = () => {
    let {
        isLoading,
        isEditing,
        showAlert,
        alertType,
        alertText,
        displayAlert,
     
        editPlayerId,
        id,
        name,
        birth,
        country,
        nativeLanguage,
        clubLanguageLevel,
        mobile,
        position,
        secondaryPosition,
        foot,
        mentality,
        height,
        weight,
        Attacking,
        Midfield,
        Defending,
        currentlyWorkingOn,
        handleChange,
        createPlayer,
        editPlayer,
        setEdit,

    } = useAppContext()


    const handleSubmit = (e) => {

console.log("1");
 

        if (name === "" || birth === "" || country === "" || nativeLanguage === ""|| clubLanguageLevel === ""|| mobile === ""|| position === ""|| secondaryPosition === ""|| foot === ""|| mentality === ""|| height === ""|| weight === ""|| Attacking === ""|| Midfield === ""|| Defending === ""|| currentlyWorkingOn === "")  {
            alertType = "error"
            alertText = "Show values"
            displayAlert()
            console.log("2");
            return <Alert />
        }
        if (isEditing) {
          if (name === "" || birth === "" || country === "" || nativeLanguage === ""|| clubLanguageLevel === ""|| mobile === ""|| position === ""|| secondaryPosition === ""|| foot === ""|| mentality === ""|| height === ""|| weight === ""|| Attacking === ""|| Midfield === ""|| Defending === ""|| currentlyWorkingOn === "")  {
            console.log("3");
                alertType = "error"
                alertText = "Show values"
                displayAlert()

                return <Alert />
            } else {
                editPlayer()
                setEdit()
                console.log("4");
                return
            }


        }
        console.log("5");
        createPlayer()  

    }





    return (
        <>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row-addPlayer-Title">

                            <ul class="nav nav-pills h-100 justify-content-center" id="pills-tab" role="tablist">

                                <li class="nav-item add-Player-Button" role="presentation">
                                    <button class="nav-link active add-Player-Button-Container w-100 h-100" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Personal Info</button>
                                </li>
                                <li class="nav-item add-Player-Button" role="presentation">
                                    <button class="nav-link add-Player-Button-Container w-100 h-100" id="pills-profile-tab" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Player Info</button>
                                </li>
                                <li class="nav-item add-Player-Button" role="presentation">
                                    <button class="nav-link add-Player-Button-Container w-100 h-100" id="pills-contact-tab" data-toggle="pill" data-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Stats</button>
                                </li>
                            </ul>
                        </div>
                        <div className="row row-addPlayer-Title-Row  m-0">
                            <div class="tab-content" id="pills-tabContent">


                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><Personal /></div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><Professional /></div>
                                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><Stats /></div>
                            </div>
                        </div>


                        <div className='btn-container text-center'>
                                        <button
                                            type='submit'
                                            className='btn   button_submit'
                                            onClick={(r) => {
                                                r.preventDefault()
                                                handleSubmit(r)
                                            }}

                                        >
                                            submit
                                        </button>
                                        <button
                                            className='btn   button_clear'

                                        >
                                            clear
                                        </button>
                                    </div>

                    </div>
                </div>


            </div>


        </>

    );
}

export default AddPlayerBox;
