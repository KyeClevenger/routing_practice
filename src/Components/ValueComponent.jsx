import React, {useState} from 'react'
import { useParams} from 'react-router-dom'

const ValueComponent = () => {
  const { value } = useParams()

  if(isNaN(value) == false) {
    return (
      <div>
      <h1>The number is: {value} </h1>
      </div>
    )
  }
  else{
    return (
      <div>
      <h1>The word is: {value} </h1>
      </div>
    )
  }
}

export default ValueComponent