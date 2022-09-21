import {
  DISPLAY_ALERT,
  CLEAR_ALERT,

  DISPLAY_ALERT_DUPLICATE_EMAIL,
  DISPLAY_ALERT_EMAIL,
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
  /*  ------------TEAMTRAINING------------ */
  CREATE_TEAMTRAINING_BEGIN,
  CREATE_TEAMTRAINING_SUCCESS,
  CREATE_TEAMTRAINING_ERROR,
  GET_TEAMTRAININGS_BEGIN,
  GET_TEAMTRAININGS_SUCCESS,


} from './actions'

import { useAppContext } from "./appContext.js"


import { initialState } from './appContext'

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: "Please provide all values",
    }
  }
  if (action.type === DISPLAY_ALERT_EMAIL) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: "Please provide valid email",
    }
  }
  if (action.type === DISPLAY_ALERT_DUPLICATE_EMAIL) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: "Inserted email already exists",
    }
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    }
  }
  if (action.type === HANDLE_CHANGE) {

    return {
      ...state,

      [action.payload.inputname]: action.payload.value,
    }
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      name: "",
      email: "",
      mobile: "",
      password: "",
      developer: false,
      pmanager: false,
      architect: false,
    }

    return {
      ...state,
      ...initialState,
    }
  }
  if (action.type === CREATE_PLAYER_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === CREATE_PLAYER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New PLAYER Created!',
    }
  }
  if (action.type === CREATE_PLAYER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === GET_PLAYERS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false }
  }
  if (action.type === GET_PLAYERS_SUCCESS) {
    return {
      ...state,

      players: action.payload.players,

    }
  }
  if (action.type === GET_ATTACKER_PLAYERS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false }
  }
  if (action.type === GET_ATTACKER_PLAYERS_SUCCESS) {
    return {
      ...state,

      Attackingplayers: action.payload.Attackingplayers,

    }
  }
  if (action.type === GET_MIDFIELD_PLAYERS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false }
  }
  if (action.type === GET_MIDFIELD_PLAYERS_SUCCESS) {
    return {
      ...state,

      Midfieldplayers: action.payload.Midfieldplayers,

    }
  }
  if (action.type === GET_DEFENSIVE_PLAYERS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false }
  }
  if (action.type === GET_DEFENSIVE_PLAYERS_SUCCESS) {
    return {
      ...state,

      Defensiveplayers: action.payload.Defensiveplayers,

    }
  }
  if (action.type === GET_GOALKEEPERS_PLAYERS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false }
  }
  if (action.type === GET_GOALKEEPERS_PLAYERS_SUCCESS) {
    return {
      ...state,

      Goalkeeperplayers: action.payload.Goalkeeperplayers,

    }
  }
  if (action.type === SET_EDIT_PLAYER) {
    const PLAYER = state.PLAYERs.find((PLAYER) => PLAYER._id === action.payload.id)
    const { _id, name, email, password, mobile, architect, developer, pmanager } = PLAYER
    return {
      ...state,
      isEditing: true,
      editPLAYERId: _id,
      name,
      email,
      password,
      mobile,
      architect,
      developer,

      pmanager,
    }
  }
  if (action.type === DELETE_PLAYER_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === EDIT_PLAYER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === RESET_EDIT_PLAYER) {
    return {
      ...state,
      name: "",
      email: "",
      password: "",
      mobile: "",
      pmanager: false,
      developer: false,
      architect: false,
      isEditing: false,
      editPLAYERId: "",
    }
  }
  if (action.type === EDIT_PLAYER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'PLAYER Updated!',
    }
  }
  if (action.type === EDIT_PLAYER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === SHOW_STATS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    }
  }
  if (action.type === SHOW_STATS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      stats: action.payload.stats,

    }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      search: '',

    }
  }


  /*  -------------------TEAMTRAINING------------------ */

  if (action.type === CREATE_TEAMTRAINING_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === CREATE_TEAMTRAINING_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New PLAYER Created!',
    }
  }
  if (action.type === CREATE_TEAMTRAINING_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === GET_TEAMTRAININGS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false }
  }
  if (action.type === GET_TEAMTRAININGS_SUCCESS) {
    return {
      ...state,

      teamTrainings: action.payload.teamTrainings,

    }
  }



  throw new Error(`no such action : ${action.type}`)
}

export default reducer
