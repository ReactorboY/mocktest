import Nav from '../navigation/nav'
import Banner from '../Banner/Banner'

function Header() {
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
