import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ArrowImageQuery = graphql`
    query {
        file (relativePath: {eq: "arrow@2x.png"}) {
            childImageSharp {
                fixed(height: 108, width: 108) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

function ArrowImage() {
    return (
        <StaticQuery
            query={ArrowImageQuery}render={data => <Img fixed={data.file.childImageSharp.fixed} />}
        />
    );
}

export default ArrowImage