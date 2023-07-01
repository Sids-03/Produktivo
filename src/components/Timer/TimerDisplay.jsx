import React from 'react';
import useSound from "use-sound";
import startSfx from '../../assets/sp.mp3';
import pauseSfx from '../../assets/sp.mp3';


export default function TimerDisplay({
  timeLeft,
  active,
  setActive,
  buttonText,
  setButtonText,
  volume,
  setSecondsLeft,
  length
}) {

  const[play]=useSound(startSfx,{interrupt: true,volume:volume})
  const[pause]=useSound(pauseSfx,{interrupt: true,volume:volume})
  const handleClick =(event) => {
    if(event.target.id === "muteButton"){
      return null
    }
    if(timeLeft === '0:00'){
      setSecondsLeft(length*60)
      setButtonText("START")
      return null
    }
    if(active){
      pause();
    }
    else{
      play();
    }
    setActive(!active);
    setButtonText( buttonText ==="START" || buttonText === "RESUME" ? "PAUSE" : "RESUME")
  };
  let timesUpMsg="Done"
  let timeText = timeLeft === "0:00" ? timesUpMsg : timeLeft
  return (
    <div className='timecolor'>
      <div className='timer_display'>
        {timeText}
        <div>
          <button className='s-p' onClick={handleClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
};
