import React, { useEffect, useState } from 'react'
import TimerDisplay from './TimerDisplay'
import Button from './Button'
import MuteToggle from './MuteToggle'
import Settings from './Settings'
import useSound from 'use-sound'
import timesUpSfx from '../../assets/end.mp3'

export default function Timer() {

  const [ settingsVisible, setSettingsVisible ] = useState(false);
  const [ active, setActive] = useState(false);
  const [ length, setLength ] = useState(25);
  const [ secondsLeft, setSecondsLeft ] = useState(length*60);
  const [ buttonText, setButtonText ] = useState("START");
  const [ volume, setVolume ] = useState(1);
  const [ timesUp ] = useSound(timesUpSfx, {volume: volume,})

  useEffect(() =>{
    if(active){
      const interval = setInterval(()=>{
        setSecondsLeft(secondsLeft => secondsLeft - 1);
      }, 1000)
      if(secondsLeft === 0){
        clearInterval(interval);
        setActive(false);
        setButtonText("RESET")
        timesUp();
      }
      return () => clearInterval(interval)
    }
  }, [active, secondsLeft, timesUp]);

  const toggleSettingsVisibility = (event) =>{
    setSettingsVisible(!settingsVisible);
  }

  const formatTimeLeft = (seconds) => {
    return (`${Math.floor(seconds/60)}:${
      (seconds%60 > 9)
        ? seconds%60
        : '0' + seconds%60
    }`)
  }

  return (
    <div className='timer'>
      <TimerDisplay
        timeLeft={formatTimeLeft(secondsLeft)}
        active={active}
        setActive={setActive}
        buttonText={buttonText}
        setButtonText={setButtonText}
        volume={volume}
        setSecondsLeft={setSecondsLeft}
        length={length}
      />
      <div className='t_edit'>
        <MuteToggle volume = {volume} setVolume = {setVolume}/>
        <Button type = "settings" toggleVisibility={toggleSettingsVisibility}/>
        <Settings
          visible={settingsVisible}
          toggleSettingsVisibility={toggleSettingsVisibility}
          length={length}
          setLength={setLength}
          closeSettings={toggleSettingsVisibility}
          setSecondsLeft={setSecondsLeft}
          setButtonText={setButtonText}
          setActive={setActive}/>
      </div>
    </div>
  )
}
