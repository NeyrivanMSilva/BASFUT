/* ADD EMPLOYEE PAGE */
import "../Players.css"
/* import Menu from "../components/menu.jsx" */
import React from "react";
/* import Header from "../components/header"; */
/* import Alert from "../components/Alert" */
import { useAppContext } from '../../../context/players/appContext.js'
import FormRow from "./FormRow";


const Personal = () => {

    let {
        showAlert,
        alertText,
        alertType,
        isEditing,
        editEmployeeId,
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
    } = useAppContext()


    const handleEmployeeInput = (e) => {
        const name2 = e.target.name
        const value2 = e.target.value

        handleChange(name2, value2)
    }




    return (
        <>
            <div class="row">
            <div class="col-md-6">
                    <FormRow type='text'
                        name='name'
                        value={name}
                        handleChange={handleEmployeeInput} id="form_name" />
                </div>
                <div class="col-md-6">
                    <FormRow type='date'
                        name='birth'  
                        value={birth}
                        handleChange={handleEmployeeInput} id="form_birth" />
                </div>
                <div class="col-md-6">
                    <FormRow type='string'
                        name='country'  
                        value={country}
                        handleChange={handleEmployeeInput} id="form_country" />
                </div>
                <div class="col-md-6">
                    <FormRow type='text'
                      
                        name='nativeLanguage'
                        value={nativeLanguage}
                        handleChange={handleEmployeeInput} id="form_nativeLanguage" />
                </div>
                <div class="col-md-6">
                    <FormRow type='text'
                         
                        name='clubLanguageLevel'
                        value={clubLanguageLevel}
                        handleChange={handleEmployeeInput} id="form_clubLanguageLevel" />
                </div>
                <div class="col-md-6">
                    <FormRow type='text'
                         pattern="[0-9]{3}"
                        name='mobile'
                        value={mobile}
                        handleChange={handleEmployeeInput} id="form_mobile" />
                </div>
            </div>

        </>

    );
}

export default Personal;
