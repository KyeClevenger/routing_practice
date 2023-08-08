import React from 'react'
import Color from '../views/Color'
import { useParams} from 'react-router-dom'

const ColorComponent = () => {
  const {text} = useParams()
  const {color} = useParams()
  const {color2} = useParams()

  return(
    <div style={{backgroundColor: color2}}>
      <h1 style={{color: color}}>The word is: {text}</h1>
    </div>
  )
}

export default ColorComponent