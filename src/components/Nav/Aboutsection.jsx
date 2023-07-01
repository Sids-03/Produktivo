import React,{useState} from 'react';
import ClockDisplay from './ClockDisplay';
export default function Nav() {
  const[ showabout, setshowabout] = useState(false);
  const handleClick = () => {
    setshowabout(true);
  };
  const handleClickout = (event) =>{
    if(event.target.id === "myabout"){
      setshowabout(false);
    }
  };
  const handleClose= () => {
    setshowabout(false);
  };
  return (
    <div className="aboutsection">
      <div className="clockdisplay">
        <ClockDisplay/>
      </div>
      <button className="aboutbutton" onClick={handleClick}>
        About
      </button>
   
    { showabout && (
      <div id="myabout" className="model" onClick={handleClickout}>
        <div className="aboutcontent">
           <span className="closeabout" onClick={handleClose}> &times;</span>
           <center><h2> About </h2> </center>
           <br></br>
           <p>Welcome to Produktivo, a dedicated platform designed to enhance your productivity and focus. In the fast-paced world we live in, it can be challenging to maintain a steady workflow. 
           <br></br><br></br>
           Produktivo provides you with a simple and effective solution to maximize your efficiency while working on office tasks, college assignments, or any other projects that require your undivided attention. We understand that creating the right environment plays a crucial role in achieving optimal productivity. 
           <br></br><br></br>
           With Produktivo, you have access to efficient set of tools that will help you create an ambient workspace tailored to your needs. 
           With a chill musical environment and to-do list right at your sight you can get to work and eliminate all distractions. Additionally, we understand the need of time management for productivity. That's why we have incorporated a timer feature into our website. 
           <br></br><br></br>
           Experience the synergy of ambient music, task management, and disciplined work sessions.   </p>
        </div>
      </div>
    )}
    </div>
  );
}
