import React from 'react'
import { Header } from '../components/Header'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

const Layout = ({ children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(32),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}>
      <Header />
      <main>{children}</main>
      <footer>
        © {` Copyright, ${new Date().getFullYear()} `}
        <Link to="/">Cooky Codes</Link>
      </footer>
    </div>
  )
}

export default Layout
