import React from 'react'

//components
import Footer from '../screens/includes/Footer';
import Navbar from '../screens/techies-park/Navbar';
import Amenities from '../screens/techies-park/Amenities';
import Events from '../screens/techies-park/Events';
import Models from '../screens/techies-park/Models';
import Spotlight from '../screens/techies-park/Spotlight';

export default function LandingPage() {
  return (
    <div>
        <Navbar />
        <Spotlight />
        <Amenities />
        <Events />
        <Models />
        <Footer />
    </div>
  )
}
