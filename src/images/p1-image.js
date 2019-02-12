import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const P1ImageQuery = graphql`
    query {
        file (relativePath: {eq: "p1.png"}) {
            childImageSharp {
                fixed(height: 280, width: 280) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

function P1Image() {
    return (
        <StaticQuery
            query={P1ImageQuery}render={data => <Img fixed={data.file.childImageSharp.fixed} />}
        />
    );
}

export default P1Image