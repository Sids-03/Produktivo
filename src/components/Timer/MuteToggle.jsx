import React from 'react'

export default function MuteToggle({ volume, setVolume }) {

  const handleClick = (event) => {
    if(volume === 0){
      setVolume(1);
    }else{
      setVolume(0);
    }
  };

  if(volume === 0){
    return (
      <button
        className='display_mute'
        id = "mute-button"
        title = "mute-button"
        onClick={handleClick}>
          <i className="fas fa-volume-mute"></i>
      </button>
    );
  } else {
    return (
      <button
        className='display_mute'
        id="mute-button"
        title="mute-button"
        onClick={handleClick}>
          <i className="fa fa-volume-up"></i>
      </button>
    );
  }
}
