/* ADD EMPLOYEE PAGE */
import "../Players.css"
/* import Menu from "../components/menu.jsx" */
import React from "react";
/* import Header from "../components/header"; */
/* import Alert from "../components/Alert" */
import { useAppContext } from '../../../context/players/appContext.js'
import Player from "./Player";
import Alert from "../../Alert.js";
import { useEffect } from 'react'

const TeamMembers = () => {
	let {
		isLoading,
		isEditing,
		showAlert,
		alertType,
		alertText,
		displayAlert,
		getPlayers,
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
		players,
		Attackingplayers,
		Midfieldplayers,
		Defensiveplayers,
	} = useAppContext()

	useEffect(() => {
		getPlayers()
		setEdit()

	
	}, [])


	const handleSubmit = (e) => {

		console.log("1");


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
		console.log("5");
		createPlayer()

	}





	return (
		<>
<div className="col-md-8">
	<div class="row w-100 m-0">

<div className="row squad-players-byposition w-100 m-0">
	<div class="col-md-4 squad-titles">
		Forwards
	</div>
	<div class="col-md-1 squad-titles">
		Age
	</div>
	<div class="col-md-1 squad-titles">
		Nat
	</div>
	
	<div class="col-md-1 squad-titles">
		Pos
	</div>
	<div class="col-md-1 squad-titles">
		Att
	</div>
	<div class="col-md-1 squad-titles">
		Mid
	</div>
	<div class="col-md-1 squad-titles">
		Def
	</div>
	<div class="col-md-1 squad-titles">
		Focus
	</div>

</div>
{Attackingplayers.map((player) => {

	return <Player  {...player} />
})}



</div>

<div class="row w-100 m-0">

<div className="row squad-players-byposition w-100 m-0">
	<div class="col-md-4 squad-titles">
		Midfielders
	</div>
	<div class="col-md-1 squad-titles">
		Age
	</div>
	<div class="col-md-1 squad-titles">
		Nat
	</div>
	
	<div class="col-md-1 squad-titles">
		Pos
	</div>
	<div class="col-md-1 squad-titles">
		Att
	</div>
	<div class="col-md-1 squad-titles">
		Mid
	</div>
	<div class="col-md-1 squad-titles">
		Def
	</div>
	<div class="col-md-1 squad-titles">
		Focus
	</div>

</div>
{Midfieldplayers.map((player) => {

	return <Player  {...player} />
})}



</div>

<div class="row w-100 m-0">

<div className="row squad-players-byposition w-100 m-0">
	<div class="col-md-4 squad-titles">
		Defenders
	</div>
	<div class="col-md-1 squad-titles">
		Age
	</div>
	<div class="col-md-1 squad-titles">
		Nat
	</div>
	
	<div class="col-md-1 squad-titles">
		Pos
	</div>
	<div class="col-md-1 squad-titles">
		Att
	</div>
	<div class="col-md-1 squad-titles">
		Mid
	</div>
	<div class="col-md-1 squad-titles">
		Def
	</div>
	<div class="col-md-1 squad-titles">
		Focus
	</div>

</div>
{Defensiveplayers.map((player) => {

	return <Player  {...player} />
})}



</div>
</div>

		</>

	);
}

export default TeamMembers;
