import mongoose from 'mongoose'
/*i mport validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken' */

const teamTrainingSchema = new mongoose.Schema(
 
  
  /* Model for the teamTraining */
{
    date: {
      type: Date,
      required: [true],
    },
    typeOfTraining: {
      type: String,
      required: [true],
    },

     commitment: {
      type: String,
      required: [true],
    },
    result: {
      type: String,
      required: [true],
    },
    coments: {
      type: String,
      required: [false],
    },
   
   },
  { timestamps: true }
)

/* EmployeeSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  })
}

EmployeeSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password)
  return isMatch
} */

export default mongoose.model('teamTraining', teamTrainingSchema)
