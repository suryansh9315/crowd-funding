import React, { useState } from 'react'
import { ethers } from 'ethers'
import { useStateContext } from '../context'

const CreateCampaign = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { address, createCampaign } = useStateContext()
  const [form, setForm] = useState({
    name:'',
    title:'',
    description:'',
    target:'',
    deadline:'',
    image:'',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Create Campaign')
  }

  return (
    <div>
      {isLoading && 'Loader...'}
      <div>
        <h1>Start a Campaign</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='name' />
        <input type="text" placeholder='title' />
        <input type="text" placeholder='description' />
        <input type="text" placeholder='target' />
        <input type="date" placeholder='deadline' />
        <input type="file" placeholder='image' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CreateCampaign