/* COMPONENT FOR EACH STRING INPUT */
import "../Players.css"


const FormRow = ({ type, pattern, name, value, handleChange, labelText }) => {
  


   const label =()=>{
    if (name ==="name"){
      return "Nome"
    } else if (name ==="birth"){
      return "birth"
    }else if (name ==="country"){
      return "country"
    }else if (name ==="nativeLanguage"){
      return "nativeLanguage"
    }else if (name ==="clubLanguageLevel"){
      return "clubLanguageLevel"
    }else if (name ==="mobile"){
      return "mobile"
    }else if (name ==="position"){
      return "position"
    }else if (name ==="secondaryPosition"){
      return "secondaryPosition"
    }else if (name ==="foot"){
      return "foot"
    }else if (name ==="mentality"){
      return "mentality"
    }else if (name ==="height"){
      return "height"
    }else if (name ==="weight"){
      return "weight"
    }else if (name ==="Attacking"){
      return "Attacking"
    }else if (name ==="Midfield"){
      return "Midfield"
    }else if (name ==="Defending"){
      return "Defending"
    }else if (name ==="currentlyWorkingOn"){
      return "currentlyWorkingOn"
    }
  }  

  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {label()}
      </label>
      <input class="form-control" id="SearchInput"
        type={type}

        value={String(value)}
        name={name}
        onChange={handleChange}

      />
    </div>
  )
}

export default FormRow
