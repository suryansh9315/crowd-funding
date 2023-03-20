import { Route, Routes } from 'react-router-dom'
import { Profile, CampaignDetails, CreateCampaign, Home } from './pages'
import { Navbar, Sidebar } from './components'

export default function App() {
  return (
    <div className='relative min-h-screen flex flex-row sm:p-8 p-4 bg-[#13131a]' >
      <div className='sm:flex hidden mr-10 relative' ><Sidebar /></div>
      <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
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
