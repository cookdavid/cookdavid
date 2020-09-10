import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location}>
      <SEO title="About" />
      <h1>David Cook</h1>
      <p>
        Principal Consultant at{' '}
        <Link to="https://www.telstra.com.au/business-enterprise/services/telstra-purple">
          Telstra Purple
        </Link>
      </p>
      <p>I'm a developer, speaker, community organiser, trainer and coach.</p>
      <h2>Work</h2>
      <p>
        In my role as Principal Consultant at Telstra Purple, I am responsible for delivering
        complex technical solutions, leading teams, transforming businesses, coaching and mentoring.
        My extensive experience in project delivery in a diverse range of industries gives me the
        ability to bridge the gap between IT teams and business stakeholders to deliver excellent
        outcomes. I enjoy investing in people and teams using agile methodologies and am very
        passionate about software craftsmanship and the philosophy of software engineering best
        practices.
      </p>
      <h2>Speaking</h2>
      <p>
        I am a regular speaker at conferences, user groups and developer breakfasts. If you’d like
        me to present at your event, please get in touch.
      </p>
      <h2>Community</h2>
      <p>
        You will find me very actively involved in the local developer community. Specifically I am
        the organiser of the following local events:
        <ul>
          <li>
            <Link to="http://dddbrisbane.com">DDD Brisbane</Link>
          </li>
          <li>
            <Link to="https://www.meetup.com/Brisbane-Net-User-Group/">
              Brisbane .NET User Group
            </Link>
          </li>
        </ul>
      </p>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
