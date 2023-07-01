import React from 'react'

const Button = ({type, buttonText="", toggleVisibility }) => {
  if(type === "settings"){
    return (
      <button className="settings" name="settings" title="showsettings" onClick={toggleVisibility}>
        <i className="fa fa-edit"></i>
      </button>
    ) 
  }
  if(type === "close"){
    return(
      <button className='closesettings' onClick={toggleVisibility}>{buttonText}</button>
    ) 
  }
  else if(type === "apply"){
    return (
      <div className ="applysettingsrow">
        <input type="submit" value={buttonText} className="applysettings"/>
      </div>
    )
  }
  else{
    return(null)
  }
}  

export default Button
 
