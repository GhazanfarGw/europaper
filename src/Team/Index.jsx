import React from 'react'
import Header from '../Home/header';
import Footer from '../Home/Footer'
import Dashboard from './Dashboard'
import Team from './TeamPage'
import Desteam from './Dteam'

export default function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <div className='block md:hidden lg:hidden xl:hidden'>
      <Team/>
    </div>
    <div className='hidden md:block lg:block xl:block'>
      <Desteam/>
    </div>
    <Footer/>
    </>
  )
}