import { Link } from 'gatsby'
import { ThemeContext } from 'providers/ThemeProvider'
import React, { useContext } from 'react'
import { Links } from './styles'

export default ({ desktop }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Links desktop={desktop} theme={theme}>
      <Link to="/" activeClassName="current">
        Home
      </Link>
      <Link to="/blog" activeClassName="current">
        Blog
      </Link>
      <Link to="/notes" activeClassName="current">
        Notes
      </Link>
      <Link to="/archives" activeClassName="current">
        Archives
      </Link>
      <Link to="/about" activeClassName="current">
        About
      </Link>
    </Links>
  )
}
