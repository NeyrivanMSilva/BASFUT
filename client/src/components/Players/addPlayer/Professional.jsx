/* ADD EMPLOYEE PAGE */
import "../Players.css"
/* import Menu from "../components/menu.jsx" */
import React from "react";
/* import Header from "../components/header"; */
/* import Alert from "../components/Alert" */
import { useAppContext } from '../../../context/players/appContext.js'
import FormRow from "./FormRow";


const Professional = () => {

    let {
        showAlert,
        alertText,
        alertType,
        isEditing,
        editEmployeeId,
         
        position,
        secondaryPosition,
        foot,
        mentality,
        height,
        weight,
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
                        name='position'
                        value={position}
                        handleChange={handleEmployeeInput} id="form_position" />
                </div>
                <div class="col-md-6">
                    <FormRow type='text'
                        name='secondaryPosition'  
                        value={secondaryPosition}
                        handleChange={handleEmployeeInput} id="form_secondaryPosition" />
                </div>
                <div class="col-md-6">
                    <FormRow type='text'
                        name='foot'
                        value={foot}
                     
                        handleChange={handleEmployeeInput} id="form_foot" />
                </div>
                <div class="col-md-6">
                    <FormRow type='text'
                      
                        name='mentality'
                        value={mentality}
                        handleChange={handleEmployeeInput} id="form_mentality" />
                </div>
                <div class="col-md-6">
                    <FormRow type='text'
                         
                        name='height'
                        value={height}
                        handleChange={handleEmployeeInput} id="form_height" />
                </div>
                <div class="col-md-6">
                    <FormRow type='text'
                         
                        name='weight'
                        value={weight}
                        handleChange={handleEmployeeInput} id="form_weight" />
                </div>
            </div>

        </>

    );
}

export default Professional;
