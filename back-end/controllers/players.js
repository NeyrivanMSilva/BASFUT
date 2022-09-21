import Player from "../models/players/Player.js"
import mongoose from 'mongoose'
import { StatusCodes } from 'http-status-codes'
import router from "../routes/player.js"
/* import {
  BadRequestError,
  NotFoundError,
   
} from '../errors/index.js' */

const getAllPlayers = async (req, res) => {
  const { position } = req.query

  const queryObject = {}

  if (position) {
    queryObject.position = position
  }

  console.log(queryObject);
  let result = Player.find(queryObject)
  const players = await result
  res.status(StatusCodes.OK).json(players)


}



/* const getEmployee = async (req, res) => {
    const {
      user: { userId },
      params: { id: employeeId },
    } = req
  
    const employee = await Employee.findOne({
      _id: employeeId,
      createdBy: userId,
    })
    if (!employee) {
      throw new NotFoundError(`No employee with id ${employeeId}`)
    }
    res.status(StatusCodes.OK).json({ employee })
  }
 */


const createPlayer = async (req, res) => {

  const { name, birth, country, nativeLanguage, clubLanguageLevel, mobile, position, secondaryPosition, foot, mentality, height, weight, Attacking, Midfield, Defending, Goalkeeping, currentlyWorkingOn } = req.body
  /* if (!name ||!email || !password || !mobile) {
    throw new BadRequestError('Please provide all values')
  } */

  const player = await Player.create({ ...req.body });

  res.status(StatusCodes.CREATED).json({ player })


}

/* const updateEmployee = async (req, res) =>{
  const { id: employeeId } = req.params
  const {name, email, password, mobile, pmanager, developer, architect } = req.body

  if (!name ||!email || !password || !mobile) {
    throw new BadRequestError('Please provide all values')
  }
  const employee = await Employee.findOne({ _id: employeeId })

  if (!employee) {
    throw new NotFoundError(`No employee with id :${employeeId}`)
  }
 

  

  const updatedEmployee = await Employee.findOneAndUpdate({ _id: employeeId }, req.body, {
    new: true,
    runValidators: true,
  })

  res.status(StatusCodes.OK).json({ updatedEmployee })
}
 */
/* const deleteEmployee = async (req, res) =>{
  const { id: employeeId } = req.params

  const employee = await Employee.findOne({ _id: employeeId })

  if (!employee) {
    throw new NotFoundError(`No employee with id :${employeeId}`)
  }



  await employee.remove()

  res.status(StatusCodes.OK).json({ msg: 'Success! employee removed' })
} */


/* router.get("/abcd", async (req,res)=>{
    dogs=[
        { name :"john"}
    ],
    owner=[
        { name :"pixa"}
    ]
})
 */





const showStats = async (req, res) => {
  let Astats = await Player.aggregate([
    { $group: { _id: "Attacking", value: { $avg: "$Attacking" } }, },

  ])
  Astats = Astats.reduce((acc, curr) => {
    const { _id: title, value } = curr
    acc[title] = value
    return acc
  }, {})


  let Mstats = await Player.aggregate([
    { $group: { _id: "Midfield", value: { $avg: "$Midfield" } }, },
  ])
  Mstats = Mstats.reduce((acc, curr) => {
    const { _id: title, value } = curr
    acc[title] = value
    return acc
  }, {})


  let Dstats = await Player.aggregate([
    { $group: { _id: "Defender", value: { $avg: "$Defending" } }, },
  ])
  Dstats = Dstats.reduce((acc, curr) => {
    const { _id: title, value } = curr
    acc[title] = value
    return acc
  }, {})


  let Gstats = await Player.aggregate([
    { $group: { _id: "Goalkeeper", value: { $avg: "$Goalkeeping" } }, },
  ])
  Gstats = Gstats.reduce((acc, curr) => {
    const { _id: title, value } = curr
    acc[title] = value
    return acc
  }, {})



  let strikers = await Player.aggregate([
    { $match: { position: "Attacker" } },
    { $group: { _id: "$position", value: { $sum: 1 } }, },

  ])
  strikers = strikers.reduce((acc, curr) => {
    const { _id: title, value } = curr
    acc[title] = value
    return acc
  }, {})


  let midfield = await Player.aggregate([
    { $match: { position: "Midfielder" } },
    { $group: { _id: "$position", value: { $sum: 1 } }, },

  ])
  midfield = midfield.reduce((acc, curr) => {
    const { _id: title, value } = curr
    acc[title] = value
    return acc
  }, {})


  let defense = await Player.aggregate([
    { $match: { position: "Defender" } },
    { $group: { _id: "$position", value: { $sum: 1 } }, },

  ])
  defense = defense.reduce((acc, curr) => {
    const { _id: title, value } = curr
    acc[title] = value
    return acc
  }, {})


  let goalkeeper = await Player.aggregate([
    { $match: { position: "Goalkeeper" } },
    { $group: { _id: "$position", value: { $sum: 1 } }, },

  ])
  goalkeeper = goalkeeper.reduce((acc, curr) => {
    const { _id: title, value } = curr
    acc[title] = value
    return acc
  }, {})


  const defaultStats = {
    Attacking: Astats.Attacking || 0,
    Midfield: Mstats.Midfield || 0,
    Defender: Dstats.Defender || 0,
    Goalkeeper: Gstats.Goalkeeper || 0,
    /* highestPlayer: highestPlayer.name, */
    strikers: strikers.Attacker || 0,
    midfield: midfield.Midfielder || 0,
    defense: defense.Defender || 0,
    goalkeeper: goalkeeper.Goalkeeper || 0
  }



  res.status(StatusCodes.OK).json({ defaultStats })
}




export {
  getAllPlayers,
  /*    getEmployee, */
  createPlayer,
  showStats,
  /*  updateEmployee,
   deleteEmployee, */
}