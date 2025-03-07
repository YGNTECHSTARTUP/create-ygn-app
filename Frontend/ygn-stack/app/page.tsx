import React from 'react'
import LandingPage from './Comp/LandingPage'
import { Header } from './Comp/header'
import Ecosystem from './Comp/Ecosystem'
import PricingSection from './Comp/PricingSection'
import OpenSourceChallenges from './Comp/OpenSourceChallenges'
import Footer from './Comp/Footer'
import Graph from './Comp/CurrentState'

const page = () => {
  return (
    <div className='overflow-hidden min-w-full bg-black'>
<LandingPage/>
<Header/>
<Ecosystem/>
<PricingSection/>
<OpenSourceChallenges/>
<Graph/>
<Footer/>
    </div>

  )
}

export default page