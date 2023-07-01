import React from 'react'
import Button from './Button';

export default function Settings({
  visible,
  toggleSettingsVisibility,
  length,
  setLength,
  closeSettings,
  setSecondsLeft,
  setButtonText,
  setActive,
}) {

  const applySettings = (e) => {
    e.preventDefault();
    setLength(e.target.timer.value);
    closeSettings()
    setButtonText("START")
    setActive(false);
    setSecondsLeft(e.target.timer.value * 60)
  }

  if(visible){
    return (
      <div className='p-visible'>
        <div className='overlay'></div>
        <div className='p_pane'>
          <Button type = "close" buttonText="x" toggleVisibility={toggleSettingsVisibility}/>
          <h2>Settings</h2>
          <form onSubmit={applySettings}>
            <div className='p_time-settings'>
              <h3>Time (Minutes)</h3>
              <div action="" className='t-settings_form'>
                <label htmlFor='timer'>Set Timer: </label>
                <input className='i-time' type='number' name='timer' id='timer' min="1" max="99" defaultValue={length}/>
              </div>
            </div>
            <Button type="apply" buttonText='Apply'/>
          </form>
        </div>
      </div>
    )
  }

  return (null)

}
