import React, { useState, useEffect } from 'react'
import  styled, { keyframes } from "styled-components"


function TypeWriter({ values }) {
  const [text, setText] = useState("");
  let ind = 0;

  const tWriter = async(text , i = 0)=>{
    if(i < text.length){
        setText(text.slice(0, i+1));
        setTimeout(()=>{
          tWriter(text, i+1);
        }, 250);
    }else{
      rtWriter(text);
    }
  };

  const rtWriter = (text, i = text.length -1) => {
    if(i >= -1){
      setText(text.slice(0 , i+1));
      setTimeout(()=>{
        rtWriter(text , i-1);
      } , 200);
    }else{
      if(text === "Soon is not as good as now"){
        tWriter("The only way around is through");
      }else if(text === "The only way around is through"){
        tWriter("It always seems impossible until it's done")
      }else{
        tWriter("Soon is not as good as now")
      }
    }
  };

  useEffect(()=>{
    tWriter(values[ind]);
  } , [])



  return (
    <Container>
      {text}
      <Cursor/>
    </Container>
  )
};

const Container = styled.p`
  font-weight: 300;
  display: inline-block;
  margin: 0;
`
const AnimatedCursor = keyframes`
  from {border-right-color: rgba(255, 255, 255, 0.75);}
  to {border-right-color: transparent}
`
const Cursor = styled.span`
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  display: inline;
  animation: ${AnimatedCursor} 0.7s steps(44) infinite normal;
`


export default TypeWriter;