import React from 'react'
import data from '../../../data/data'
import Link from 'next/link'
import Nav from '../navigation/nav'
import Featured from '../featured/featured'

function Header() {
  const { sitename, sitetagline, siteurl } = data
  return (
    <>
      <header className='px-24'>
        <Nav />
        <Featured />
      </header>
    </>
  )
}

export default Header
