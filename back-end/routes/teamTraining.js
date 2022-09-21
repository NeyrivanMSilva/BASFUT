import express from 'express'


const teamTrainingRouter = express.Router()
import {
  createTeamtraining,
  getAllTeamtrainings,

} from '../controllers/teamTraining.js'

teamTrainingRouter.route('/').post(createTeamtraining).get(getAllTeamtrainings)


/* router.route('/:id').get(getEmployee).delete(deleteEmployee).patch(updateEmployee) */

export default teamTrainingRouter
