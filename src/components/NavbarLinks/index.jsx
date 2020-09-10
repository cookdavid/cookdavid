import { Link } from 'gatsby'
import { Links, StyledButton } from './styles'
import { React } from 'react'

export default () => {
  return (
    <Links>
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
