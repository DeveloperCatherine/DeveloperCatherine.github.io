import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ProfileImageQuery = graphql`
    query {
        file (relativePath: {eq: "profile.png"}) {
            childImageSharp {
                fluid(maxHeight: 288) {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                }
            }
        }
    }
`

const ProfileImage = () => (
    <StaticQuery
        query={ProfileImageQuery}render={data => <Img fluid={data.file.childImageSharp.fluid} />}
    />
)

export default ProfileImage