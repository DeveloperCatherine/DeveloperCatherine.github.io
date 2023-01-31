import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not found" />
    <h1>PAGE NOT FOUND</h1>
    <p>I couldn't find the page you are looking for... the sadness.</p>
  </Layout>
)

export default NotFoundPage