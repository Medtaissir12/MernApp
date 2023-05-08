import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories  from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Teams from '../components/Teams'
import Navi from '../components/Navi'
import AnnouncementTwo from '../components/AnnouncemeTwo'
import AboutUs from '../components/AboutUs'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Navi />
      <Teams />
      <AnnouncementTwo />
      <Products />
      <Categories />
      <AboutUs/>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home