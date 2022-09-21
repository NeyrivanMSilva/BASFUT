/* ADD EMPLOYEE PAGE */
import "../Players.css"
/* import Menu from "../components/menu.jsx" */
import React from "react";
/* import Header from "../components/header"; */
/* import Alert from "../components/Alert" */
import { useAppContext } from '../../../context/players/appContext.js'
import FormRow from "./FormRow";


const Stats = () => {

    let {
        showAlert,
        alertText,
        alertType,
        isEditing,
        editEmployeeId,
        Attacking,
        Midfield,
        Defending,
        Goalkeeping,
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
                        name='Attacking'
                        value={Attacking}
                        handleChange={handleEmployeeInput} id="form_Attacking" />
                </div>
                <div class="col-md-6">
                    <FormRow type='text'
                        name='Midfield'  
                        value={Midfield}
                        handleChange={handleEmployeeInput} id="form_Midfield" />
                </div>
                <div class="col-md-6">
                    <FormRow type='text'
                        name='Defending'
                        value={Defending}
                     
                        handleChange={handleEmployeeInput} id="form_Defending" />
                </div>
                <div class="col-md-6">
                    <FormRow type='text'
                        name='Goalkeeping'
                        value={Goalkeeping}
                     
                        handleChange={handleEmployeeInput} id="form_Defending" />
                </div>
                <div class="col-md-6">
                    <FormRow type='text'
                      
                        name='currentlyWorkingOn'
                        value={currentlyWorkingOn}
                        handleChange={handleEmployeeInput} id="form_currentlyWorkingOn" />
                </div>
             
            </div>

        </>

    );
}

export default Stats;
