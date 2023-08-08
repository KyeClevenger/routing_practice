import React, {useState} from 'react'
import ValueComponent from '../Components/ValueComponent'
import { useNavigate } from 'react-router-dom'
import { useParams} from 'react-router-dom'

const Value = () => {
  return (
    <div>
      <ValueComponent></ValueComponent>
    </div>
  )
}

export default Value