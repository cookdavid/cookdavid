import React, { useContext } from 'react'
import Navbar from '../Navbar'

import { Link } from 'gatsby'
//import Hamburger from './Hamburger'
//import Sidebar from './Sidebar'
import { Wrapper, Links, Brand, Overlay } from './styles'
//import useStickyHeader from 'hooks/useStickyHeader'

export const Header = () => {
  //const [isHomePage, sidebar, toggle] = useStickyHeader()
  //const { theme } = useContext(ThemeContext)

  return (
    <Wrapper>
      <Brand></Brand>
      <Links desktop="true">
        <Link to="/" activeClassName="current">
          Home
        </Link>

        <Link to="/about" activeClassName="current">
          About
        </Link>
      </Links>
    </Wrapper>
    // <Wrapper isHomePage={isHomePage} theme={theme}>
    //   <Overlay sidebar={sidebar} onClick={toggle} />
    //   <Navbar />
    //   <Hamburger isHomePage={isHomePage} sidebar={sidebar} toggle={toggle} />
    //   <Sidebar sidebar={sidebar} toggle={toggle} />
    //   </Wrapper>
    // <Wrapper>
    /* <Overlay sidebar={sidebar} onClick={toggle} /> */

    //   <Navbar></Navbar>
    /* <Hamburger isHomePage={isHomePage} sidebar={sidebar} toggle={toggle} /> */
    /* <Sidebar sidebar={sidebar} toggle={toggle} /> */
    // </Wrapper>
  )
}
export default Header
