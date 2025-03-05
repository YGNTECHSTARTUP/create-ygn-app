import React from 'react'
import LandingPage from './Comp/LandingPage'
import { Header } from './Comp/header'
import Ecosystem from './Comp/Ecosystem'
import PricingSection from './Comp/PricingSection'

const page = () => {
  return (
    <div>
<LandingPage/>
<Header/>
<Ecosystem/>
<PricingSection/>
    </div>

  )
}

export default page