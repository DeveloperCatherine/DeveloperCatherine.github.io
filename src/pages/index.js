import React from 'react'

import Layout from '../components/layout'
import Intro from '../components/intro'
import Transit from '../components/transit'
import About from '../components/about'
import Work from '../components/work'
import SEO from '../components/seo'


/**
 * Index Page 
 * 
 */

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <Intro />
    <Transit />
    <About />
    <Work />
  </Layout>
)

export default IndexPage