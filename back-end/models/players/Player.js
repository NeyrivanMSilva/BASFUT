import mongoose from 'mongoose'
/*i mport validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken' */

const PlayerSchema = new mongoose.Schema(
 
  
  /* Model for the Employee */
{
    name: {
      type: String,
      required: [true, 'Please provide position'],
      maxlength: 100,
      value:"erwfer",
    },
    birth: {
      type: Date,
      required: [true],
    },
     country: {
      type: String,
      required: [false],
    },
    nativeLanguage: {
      type: String,
      required: [false],
    },
    clubLanguageLevel: {
      type: Number,
      required: [false],
    },
    mobile: {
      type: Number,
    },
    position: {
      type: String,
      required: [true],
    },
    secondaryPosition: {
      type: String,
      required: [false],
    },
    foot: {
      type: String,
      required: [false],
    },
    mentality: {
      type: String,
    },
    height: {
      type: String,
     required: [true, 'Please provide cellphone number'],
    },
    weight: {
      type: String,
     required: [true, 'Please provide cellphone number'],
    },
    Attacking: {
      type: Number,
      required: [true],
    },
    Midfield: {
      type: Number,
      required: [false],
    },
    Defending: {
      type: Number,
      required: [false],
    },
    Goalkeeping: {
      type: Number,
      required: [false],
    },
    currentlyWorkingOn: {
      type: String,
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

export default mongoose.model('Player', PlayerSchema)
