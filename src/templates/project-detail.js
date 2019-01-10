import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ProjectDetailPage = ({data}) => {
    const project = data.markdownRemark
    return (
        <Layout>
            <SEO title={project.frontmatter.title} keywords={[`portfolio`, `application`, `react`]} />
            <div>
                <h1>{project.frontmatter.title}</h1>
                <h3>{project.frontmatter.subtitle}</h3>
                <div>
                    {project.frontmatter.roles}
                </div>
                <div dangerouslySetInnerHTML={{ __html: project.html }} />
            </div>
        </Layout>
    )
}

export default ProjectDetailPage

export const query = graphql `
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                subtitle
                roles
            }
        }
    }
`

