import React from 'react'
import data from '../../../data/data'
import Link from 'next/link'
import Nav from '../navigation/nav'
import Banner from '../Banner/Banner'

function Header() {
  const { sitename, sitetagline, siteurl } = data
  return (
    <>
      <header className='px-32'>
        <Nav />
        <Banner />
      </header>
    </>
  )
}

export default Header
