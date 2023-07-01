import React from 'react'
import TypeWriter from './TypeWriter'

const values = ["Soon is not as good as now", "The only way around is through", "It always seems impossible until it's done"];

export default function MainHeader() {
    
    return (
        <div className="m-header">
            <h1>Produktivo</h1>
            <div className="t-animation">
                <TypeWriter values={values}/>
            </div>
        </div>
  )
}
