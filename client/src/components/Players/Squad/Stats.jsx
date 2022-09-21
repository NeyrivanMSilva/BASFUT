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

const Stats = () => {
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
		stats,
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

			<div className="col-md-4 stats-column">
				<div class="row m-0">
					<div class="col-md-12">
						<h3 class="text-center text-white">
							h3. Lorem ipsum dolor sit amet.
							{stats.Defender}
						</h3>
					</div>
				</div>
				<div class="row m-0">

					<div class="col-md-2 p-0">
						<div className="stats-overall-box">
							<div className="p">

							</div>
						</div>
					</div>
					<div class="col-md-2 p-0">
						<div className="stats-overall-box">

						</div>
					</div>
						<div class="col-md-2 p-0">
						<div className="stats-overall-box">
							
						</div>
					</div>
						<div class="col-md-2 p-0">
						<div className="stats-overall-box">
							
						</div>
					</div>
					<div class="col-md-4 p-0">
						<div className="stats-overall-box">
							
						</div>
					</div>

				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="row">
							<div class="col-md-3">
							</div>
							<div class="col-md-6">
							</div>
							<div class="col-md-3">
							</div>
						</div>
					</div>
				</div>
			</div>


		</>

	);
}

export default Stats;
