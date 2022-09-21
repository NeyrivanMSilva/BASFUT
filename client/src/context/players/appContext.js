/* FUNCTIONS */

import React, { useReducer, useContext, useEffect } from 'react'
import reducer from './reducer.js'
import axios from 'axios'
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_PLAYER_BEGIN,
  CREATE_PLAYER_SUCCESS,
  CREATE_PLAYER_ERROR,
  GET_PLAYERS_BEGIN,
  GET_PLAYERS_SUCCESS,
  GET_ATTACKER_PLAYERS_BEGIN,
  GET_ATTACKER_PLAYERS_SUCCESS,
  GET_MIDFIELD_PLAYERS_BEGIN,
  GET_MIDFIELD_PLAYERS_SUCCESS,
  GET_DEFENSIVE_PLAYERS_BEGIN,
  GET_DEFENSIVE_PLAYERS_SUCCESS,
  GET_GOALKEEPERS_PLAYERS_BEGIN,
  GET_GOALKEEPERS_PLAYERS_SUCCESS,
  SET_EDIT_PLAYER,
  DELETE_PLAYER_BEGIN,
  EDIT_PLAYER_BEGIN,
  EDIT_PLAYER_SUCCESS,
  EDIT_PLAYER_ERROR,
  RESET_EDIT_PLAYER,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  CLEAR_FILTERS,
  /*  --------TEAMTRAINING-------- */
  CREATE_TEAMTRAINING_BEGIN,
  CREATE_TEAMTRAINING_SUCCESS,
  CREATE_TEAMTRAINING_ERROR,
  GET_TEAMTRAININGS_BEGIN,
  GET_TEAMTRAININGS_SUCCESS,




} from './actions'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('location')

const initialState = {

  showAlert: false,
  alertText: "",
  alertType: "",
  isEditing: false,
  /*  --------PLAYERS-------- */
  name: "",
  birth: "",
  country: "",
  nativeLanguage: "",
  clubLanguageLevel: "",
  mobile: "",
  position: "",
  secondaryPosition: "",
  foot: "",
  mentality: "",
  height: "",
  weight: "",
  Attacking: "",
  Midfield: "",
  Defending: "",
  Goalkeeping: "",
  highestPlayer: "",
  currentlyWorkingOn: "",
  players: [],
  Attackingplayers: [],
  Midfieldplayers: [],
  Defensiveplayers: [],
  Goalkeeperplayers: [],
  stats: {},
  Attackers: 0,
  Midfielders: 0,
  Defenders: 0,
  Keepers: 0,
  searchPosition: "",
  /*  --------TEAMTRAINING-------- */
  teamTrainings:[],
  date: "",
  typeOfTraining: "",

  commitment: "",
  result: "",
  coments: "",










}




const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  /*  ----------------PLAYERS-------------------- */

  const playersFetch = axios.create({
    baseURL: 'http://localhost:5000/players',
  })
  const setEdit = () => {
    dispatch({
      type: RESET_EDIT_PLAYER,
    })
  }
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
    clearAlert()
  }
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 3000)
  }
  const handleChange = (inputname, value) => {
    dispatch({ type: HANDLE_CHANGE, payload: { inputname, value } })
  }
  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES })
  }
  const createPlayer = async () => {
    dispatch({ type: CREATE_PLAYER_BEGIN })
    try {
      const { name, birth, country, nativeLanguage, clubLanguageLevel, mobile, position, secondaryPosition, foot, mentality, height, weight, Attacking, Midfield, Defending, Goalkeeping, currentlyWorkingOn } = state
      await playersFetch.post('', {
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
        Goalkeeping,
        currentlyWorkingOn,
      })

      dispatch({ type: CREATE_PLAYER_SUCCESS })
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: CREATE_PLAYER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }
  const getPlayers = async () => {
    const { searchPosition } = state

    let url = `http://localhost:5000/players`
    /*   if (searchPosition) {
           url = url + `?position=${searchPosition}`
         }  */
    dispatch({ type: GET_PLAYERS_BEGIN })
    try {
      const data = await fetch(url)

      const players = await data.json()

      console.log("pixa");
      dispatch({
        type: GET_PLAYERS_SUCCESS,
        payload: {
          players,

        },

      })

    } catch (error) {

    }
    clearAlert()
      ;
  }
  const getAttackingPlayers = async () => {
    const { search, searchPosition } = state

    let url = `http://localhost:5000/players?position=Attacker`

    dispatch({ type: GET_ATTACKER_PLAYERS_BEGIN })
    try {
      const data = await fetch(url)

      const Attackingplayers = await data.json()
      console.log(Attackingplayers);

      dispatch({
        type: GET_ATTACKER_PLAYERS_SUCCESS,
        payload: {
          Attackingplayers,

        },

      })

    } catch (error) {

    }
    clearAlert()
      ;
  }
  const getMidfieldPlayers = async () => {
    const { search, searchPosition } = state

    let url = `http://localhost:5000/players?position=Midfield`

    dispatch({ type: GET_MIDFIELD_PLAYERS_BEGIN })
    try {
      const data = await fetch(url)

      const Midfieldplayers = await data.json()


      dispatch({
        type: GET_MIDFIELD_PLAYERS_SUCCESS,
        payload: {
          Midfieldplayers,

        },

      })

    } catch (error) {

    }
    clearAlert()
      ;
  }
  const getDefensivePlayers = async () => {
    const { search, searchPosition } = state

    let url = `http://localhost:5000/players?position=Defender`

    dispatch({ type: GET_DEFENSIVE_PLAYERS_BEGIN })
    try {
      const data = await fetch(url)

      const Defensiveplayers = await data.json()
      console.log(Defensiveplayers);

      dispatch({
        type: GET_DEFENSIVE_PLAYERS_SUCCESS,
        payload: {
          Defensiveplayers,

        },

      })

    } catch (error) {

    }
    clearAlert()
      ;
  }
  const getGoalkeeperPlayers = async () => {
    const { search, searchPosition } = state

    let url = `http://localhost:5000/players?position=Goalkeeper`

    dispatch({ type: GET_GOALKEEPERS_PLAYERS_BEGIN })
    try {
      const data = await fetch(url)

      const Goalkeeperplayers = await data.json()
      console.log(Goalkeeperplayers);

      dispatch({
        type: GET_GOALKEEPERS_PLAYERS_SUCCESS,
        payload: {
          Goalkeeperplayers,

        },

      })

    } catch (error) {

    }
    clearAlert()
      ;
  }
  const setEditPlayer = (id) => {
    handleChange("id", id)

    dispatch({ type: SET_EDIT_PLAYER, payload: { id } })
  }
  const editPlayer = async () => {
    dispatch({ type: EDIT_PLAYER_BEGIN })

    try {
      const { name, email, password, mobile, pmanager, developer, architect } = state
      await playersFetch.patch(`${state.editPLAYERId}`, {
        name,
        email,
        password,
        mobile,
        pmanager,
        developer,
        architect
      })
      dispatch({ type: EDIT_PLAYER_SUCCESS })
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: EDIT_PLAYER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }
  const deletePlayer = async (PLAYERId) => {
    dispatch({ type: DELETE_PLAYER_BEGIN })
    try {
      await playersFetch.delete(`/${PLAYERId}`)
      getPlayers()
    } catch (error) {

    }
  }
  const showStats = async () => {
    dispatch({ type: SHOW_STATS_BEGIN })
    try {
      const { data } = await playersFetch('/stats')
      console.log(data);
      dispatch({
        type: SHOW_STATS_SUCCESS,
        payload: {
          stats: data.defaultStats,

        },
      })
    } catch (error) {

    }
    clearAlert()
  }
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }

  /*  -------------------TEAMTRAINING------------------ */


  const TeamTrainingFetch = axios.create({
    baseURL: 'http://localhost:5000/teamTraining',
  })

  const createTeamTraining = async () => {
    dispatch({ type: CREATE_TEAMTRAINING_BEGIN })
    try {
      const { date,typeOfTraining,  commitment, result, coments } = state
      await playersFetch.post('', {
        date,
        typeOfTraining,
     
        commitment,
        result,
        coments
      })

      dispatch({ type: CREATE_TEAMTRAINING_SUCCESS })
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: CREATE_TEAMTRAINING_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }
  const getTeamTrainings = async () => {
    const { searchPosition } = state

    let url = 'http://localhost:5000/teamTraining'
    /*   if (searchPosition) {
         url = url + `?position=${searchPosition}`
       }  */
    dispatch({ type: GET_TEAMTRAININGS_BEGIN })
    try {
      const data = await fetch(url)

      const teamTrainings = await data.json()

      console.log("pixa");
      dispatch({
        type: GET_TEAMTRAININGS_SUCCESS,
        payload: {
          teamTrainings,

        },

      })

    } catch (error) {

    }
    clearAlert()
      ;
  }











  useEffect(() => {
    getPlayers()
    getAttackingPlayers()
    getMidfieldPlayers()
    getDefensivePlayers()
    getGoalkeeperPlayers()
    showStats()

  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,

        handleChange,
        clearValues,
        createPlayer,
        getPlayers,
        setEditPlayer,
        deletePlayer,
        editPlayer,
        showStats,
        setEdit,
        clearFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}




const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }