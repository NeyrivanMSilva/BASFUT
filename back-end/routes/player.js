import express from 'express'


const playersRouter = express.Router()
import {
  createPlayer,
  getAllPlayers,
  showStats,
} from '../controllers/players.js'

playersRouter.route('/').post(createPlayer).get(getAllPlayers)
playersRouter.route('/stats').get(showStats)

/* router.route('/:id').get(getEmployee).delete(deleteEmployee).patch(updateEmployee) */

export default playersRouter
