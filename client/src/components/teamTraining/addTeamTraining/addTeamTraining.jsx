/* ADD EMPLOYEE PAGE */

/* import Menu from "../components/menu.jsx" */
import React from "react";
/* import Header from "../components/header"; */
/* import Alert from "../components/Alert" */
import { useAppContext } from '../../../context/players/appContext.js'
import "../teamTraining.css"
import Alert from "../../Alert.js";
import { useState } from 'react';
import { useRef } from 'react';





const AddTeamTrainingC = () => {
    let {
        isLoading,
        isEditing,
        showAlert,
        alertType,
        alertText,
        displayAlert,
        date,
        typeOfTraining,
   
        commitment,
        result,
        coments,


    } = useAppContext()


    const handleSubmit = (e) => {

        /*    if (name === "" || birth === "" || country === "" || nativeLanguage === "" || clubLanguageLevel === "" || mobile === "" || position === "" || secondaryPosition === "" || foot === "" || mentality === "" || height === "" || weight === "" || Attacking === "" || Midfield === "" || Defending === "" || currentlyWorkingOn === "") {
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
   
           createPlayer() */
    }

    const [TacticalIsActive, setTacticalIsActive] = useState(false);
    const [PhysicalIsActive, setPhysicalIsActive] = useState(false);
    const [RecoveryIsActive, setRecoveryIsActive] = useState(false);

    const [WellIsActive, setWellIsActive] = useState(false);
    const [NormalIsActive, setNormalIsActive] = useState(false);
    const [PoorIsActive, setPoorIsActive] = useState(false);

    const workout = (input) => {
        if(input==="tatical"){
            setTacticalIsActive(current => !current)
            if(PhysicalIsActive===true){
                 setPhysicalIsActive(current => !current)
            }
            if(RecoveryIsActive===true){
                setRecoveryIsActive(current => !current)
           }
        }

        if(input==="physical"){
            setPhysicalIsActive(current => !current)
            if(TacticalIsActive===true){
                setTacticalIsActive(current => !current)
            }
            if(RecoveryIsActive===true){
                setRecoveryIsActive(current => !current)
           }
        }

        if(input==="recovery"){
            setRecoveryIsActive(current => !current)
            if(TacticalIsActive===true){
                setTacticalIsActive(current => !current)
            }
            if(PhysicalIsActive===true){
                setPhysicalIsActive(current => !current)
           }
        }

        
    }

    const performance = (input) => {
        if(input==="Well"){
            setWellIsActive(current => !current)
            if(NormalIsActive===true){
                setNormalIsActive(current => !current)
            }
            if(PoorIsActive===true){
                setPoorIsActive(current => !current)
           }
        }

        if(input==="Normal"){
            setNormalIsActive(current => !current)
            if(WellIsActive===true){
                setWellIsActive(current => !current)
            }
            if(PoorIsActive===true){
                setPoorIsActive(current => !current)
           }
        }

        if(input==="Poor"){
            setPoorIsActive(current => !current)
            if(WellIsActive===true){
                setWellIsActive(current => !current)
            }
            if(NormalIsActive===true){
                setNormalIsActive(current => !current)
            }
        }

        
    }



    return (
        <>
            <div class="container-fluid teamTraining-container">
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="text-center text-white">
                            What did the team worked out ?
                        </h3>
                        <div class="row ">
                            <div class="col-md-4 p-2">
                                <div className="col3-teamtraining" onClick={()=>workout("tatical")} style={{ backgroundColor: TacticalIsActive ? 'salmon' : '', color: TacticalIsActive ? 'white' : '' }}>
                                    <img src="./dumbbell.png" alt="" className="teamTraining-workout-img " />
                                </div>
                            </div>

                            <div class="col-md-4 p-2">
                                <div className="col3-teamtraining" onClick={()=>workout("physical")} style={{ backgroundColor: PhysicalIsActive ? 'salmon' : '', color: PhysicalIsActive ? 'white' : '' }}>
                                    <img src="./dumbbell.png" alt="" className="teamTraining-workout-img " />
                                </div>
                            </div>

                            <div class="col-md-4 p-2">
                                <div className="col3-teamtraining" onClick={()=>workout("recovery")} style={{ backgroundColor: RecoveryIsActive ? 'salmon' : '', color: RecoveryIsActive ? 'white' : '' }}>
                                    <img src="./dumbbell.png" alt="" className="teamTraining-workout-img " />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                    <h3 class="text-center text-white">
                        How did the team performed ?
                        </h3>
                        <div class="row">
                        <div class="col-md-4 p-2">
                                <div className="col3-teamtraining" onClick={()=>performance("Well")} style={{ backgroundColor: WellIsActive ? 'salmon' : '', color: WellIsActive ? 'white' : '' }}>
                                    <img src="./dumbbell.png" alt="" className="teamTraining-workout-img " />
                                </div>
                            </div>

                            <div class="col-md-4 p-2">
                                <div className="col3-teamtraining" onClick={()=>performance("Normal")} style={{ backgroundColor: NormalIsActive ? 'salmon' : '', color: NormalIsActive ? 'white' : '' }}>
                                    <img src="./dumbbell.png" alt="" className="teamTraining-workout-img " />
                                </div>
                            </div>

                            <div class="col-md-4 p-2">
                                <div className="col3-teamtraining" onClick={()=>performance("Poor")} style={{ backgroundColor: PoorIsActive ? 'salmon' : '', color: PoorIsActive ? 'white' : '' }}>
                                    <img src="./dumbbell.png" alt="" className="teamTraining-workout-img " />
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="text-center">
                            h3. Lorem ipsum dolor sit amet.
                        </h3>
                        <div class="row">
                            <div class="col-md-3 col3-teamtraining">
                            </div>
                            <div class="col-md-3 col3-teamtraining">
                            </div>
                            <div class="col-md-3 col3-teamtraining">
                            </div>
                            <div class="col-md-3 col3-teamtraining">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="text-center">
                            h3. Lorem ipsum dolor sit amet.
                        </h3>
                        <div class="row">
                            <div class="col-md-3 col3-teamtraining">
                            </div>
                            <div class="col-md-3 col3-teamtraining">
                            </div>
                            <div class="col-md-3 col3-teamtraining">
                            </div>
                            <div class="col-md-3 col3-teamtraining">
                            </div>
                        </div>
                        <div id="card-829847">
                            <div class="card">
                                <div class="card-header">
                                    <a class="card-link" data-toggle="collapse" data-parent="#card-829847" href="#card-element-309681">Collapsible Group Item #1</a>
                                </div>
                                <div id="card-element-309681" class="collapse show">
                                    <div class="card-body">
                                        Anim pariatur cliche...
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <a class="collapsed card-link" data-toggle="collapse" data-parent="#card-829847" href="#card-element-247005">Collapsible Group Item #2</a>
                                </div>
                                <div id="card-element-247005" class="collapse">
                                    <div class="card-body">
                                        Anim pariatur cliche...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
}

export default AddTeamTrainingC;