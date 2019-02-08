import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const MaskedSurfingImageQuery = graphql`
    query {
        file (relativePath: {eq: "surfing-masked.png"}) {
            childImageSharp {
                fluid(maxHeight: 400) {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                }
            }
        }
    }
`

const MaskedSurfingImage = () => (
    <StaticQuery
        query={MaskedSurfingImageQuery}render={data => <Img fluid={data.file.childImageSharp.fluid} />}
    />
)

export default MaskedSurfingImage