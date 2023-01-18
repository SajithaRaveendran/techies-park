import React, { useEffect } from 'react'

//components
import Navbar from '../screens/event-list-page/ListNavbar'
import EventList from '../screens/event-list-page/EventList'
import Footer from '../screens/includes/Footer'



export default function ListPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <Navbar />
        <EventList />
        <Footer/>
    </div>
  )
}
