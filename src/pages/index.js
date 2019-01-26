import React from 'react'
// import styled from 'styled-components'
import {ScreenClassRender} from 'react-grid-system'

import Layout from '../components/layout'
import Intro from '../components/intro'
import Transit from '../components/transit'
import About from '../components/about'
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
    <ScreenClassRender render={screenClass => (
        <p style={{ fontSize: ['lg', 'xl'].includes(screenClass) ? '2rem' : '1rem' }} >
          Screen class: {screenClass}
        </p>
      )} />
  </Layout>
)

export default IndexPage