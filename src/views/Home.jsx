import React, {useState} from 'react'
import HomeComponent from '../Components/HomeComponent'
import { useNavigate } from 'react-router-dom'
import { useParams} from 'react-router-dom'

const Home = () => {
    
  return (
    <div>
      <HomeComponent></HomeComponent>
    </div>
  )
}

export default Home