import { Route, Routes } from 'react-router-dom'
import { Profile, CampaignDetails, CreateCampaign, Home } from './pages'
import { Navbar, Sidebar } from './components'

export default function App() {
  return (
    <div>
      <div><Sidebar /></div>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-campaign' element={<CreateCampaign />} />
          <Route path='/campaign-details/:id' element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  );
}
