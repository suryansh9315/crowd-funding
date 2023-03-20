import React, { useState, useEffect } from 'react'
import { DisplayCampaigns } from '../components'
import { useStateContext } from '../context'

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [campaigns, setCampaigns] = useState([])
  const { address, contract, getCampaigns, userCampaigns } = useStateContext()

  const fetchCampaigns = async () => {
    setIsLoading(true)
    const data = await userCampaigns()
    setCampaigns(data)
    setIsLoading(false)
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
    return () => {}
  }, [address, contract])
  

  return (
    <div>
      <DisplayCampaigns title='All Campaigns' isLoading={isLoading} campaigns={campaigns}  />
    </div>
  )
}

export default Profile