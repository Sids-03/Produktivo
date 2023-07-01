import React,{useState,useEffect} from 'react';

export default function ClockDisplay() {
  const [Time,settime]=useState(new Date());
  useEffect(() => {
    setInterval(() => settime(new Date()), 1000);
  }, [])
  return (
    <div className="standardtime">
      <p> {Time.toLocaleTimeString()} </p>
    </div>
  )
}
