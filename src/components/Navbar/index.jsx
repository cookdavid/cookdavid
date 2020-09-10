//import { Container, Logo } from 'components/common'
import { Link } from 'gatsby'
//import { ThemeContext } from 'providers/ThemeProvider'
import React, { useContext } from 'react'
import NavbarLinks from '../NavbarLinks'
import { Brand, BrandLogo, Wrapper } from './styles'

export const Navbar = () => {
  //const { theme } = useContext(ThemeContext)
  return (
    <Wrapper>
      <Brand as={Link} theme="light" to="/">
        {/* <BrandLogo as={Logo} color={theme === 'dark' ? '#fff' : '#212121'} /> */}
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  )
}
