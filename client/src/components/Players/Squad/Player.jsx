/* ADD EMPLOYEE PAGE */
import "../Players.css"
/* import Menu from "../components/menu.jsx" */
import React from "react";
/* import Header from "../components/header"; */
/* import Alert from "../components/Alert" */
import { useAppContext } from '../../../context/players/appContext.js'
import   {   useEffect } from 'react'
import Alert from "../../Alert.js";

const Player = ({
         
		_id,
        
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
      

    }) =>{
		 const { setEditPlayer, deletePlayer } = useAppContext()

	useEffect(() => {
    
    
      
     
      },   [])


    return (
        <>

		
		 <div className="row squad-players-header w-100 m-0">
			<div className="col-md-4">
				{name}
			</div>
			<div className="col-md-1">
				{birth}
			</div>
			<div className="col-md-1">
				{country}
			</div>
		
			 
			<div className="col-md-1">
				{position}
			</div>
			<div className="col-md-1">
				{Attacking}
			</div>
			<div className="col-md-1">
				{Midfield}
			</div>
			<div className="col-md-1">
				{Defending}
			</div>
			<div className="col-md-1">
				{currentlyWorkingOn}
			</div>
		 
		  </div>

        </>

    );
}

export default Player;
