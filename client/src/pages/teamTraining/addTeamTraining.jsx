/* ADD EMPLOYEE PAGE */

/* import Menu from "../components/menu.jsx" */
import React from "react";
/* import Header from "../components/header"; */
import Alert from "../../components/Alert"
import { useAppContext } from '../../context/players/appContext.js'
import Header from "../../components/header/header";

import AddTeamTrainingC from "../../components/teamTraining/addTeamTraining/addTeamTraining";



const AddTeamTraining = () => {
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




        if (name === "" || birth === "" || country === "" || nativeLanguage === "" || clubLanguageLevel === "" || mobile === "" || position === "" || secondaryPosition === "" || foot === "" || mentality === "" || height === "" || weight === "" || Attacking === "" || Midfield === "" || Defending === "" || currentlyWorkingOn === "") {
            alertType = "error"
            alertText = "Show values"
            displayAlert()
            console.log("2");
            return <Alert />
        }
        if (isEditing) {
            if (name === "" || birth === "" || country === "" || nativeLanguage === "" || clubLanguageLevel === "" || mobile === "" || position === "" || secondaryPosition === "" || foot === "" || mentality === "" || height === "" || weight === "" || Attacking === "" || Midfield === "" || Defending === "" || currentlyWorkingOn === "") {
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

        createPlayer()

    }





    return (
        <>

            <div class="container-fluid squad-page p-0">
                <Header />

                <AddTeamTrainingC />
</div>
            </>

            );
}

            export default AddTeamTraining;