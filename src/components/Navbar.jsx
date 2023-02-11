import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../context'

const Navbar = () => {
  const { address, connect } = useStateContext()
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => {
        if(address) navigate('create-campaign')
        else connect()
      }}>{address ? 'Create a Campaign' : 'Connect'}</button>
    </div>
  )
}

export default Navbar