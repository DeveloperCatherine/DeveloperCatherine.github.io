import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const IntroImage = () => (
    <StaticQuery
        query={graphql`
            query {
                file (relativePath: {eq: "profile.png"}) {
                    childImageSharp {
                        fluid(maxHeight: 280) {
                            ...GatsbyImageSharpFluid
                            presentationWidth
                        }
                    }
                }
            }
        `}render={data => <Img fluid={data.file.childImageSharp.fluid} />}
    />
)

export default IntroImage