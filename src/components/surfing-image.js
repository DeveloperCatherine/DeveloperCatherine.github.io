import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const SurfingImageQuery = graphql`
    query {
        file (relativePath: {eq: "surfing.png"}) {
            childImageSharp {
                fluid(maxHeight: 400) {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                }
            }
        }
    }
`

const SurfingImage = () => (
    <StaticQuery
        query={SurfingImageQuery}render={data => <Img fluid={data.file.childImageSharp.fluid} />}
    />
)

export default SurfingImage