import React, {useState} from 'react'
import ColorComponent from '../Components/ColorComponent'
import { useNavigate } from 'react-router-dom'
import { useParams} from 'react-router-dom'

const Color = () => {
  return (
    <div>
      <ColorComponent></ColorComponent>
    </div>
  )
}

export default Color