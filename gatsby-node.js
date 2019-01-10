const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `src/pages` })
        console.log("\n", slug)
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

// exports.createPages = ({ graphql, actions}) => {
//     const { createPage } = actions
//     return graphql(`
//         {
//             allMarkdownRemark {
//                 edges {
//                     node {
//                         frontmatter {
//                             title
//                             subtitle
//                         }
//                         html
//                         fields {
//                             slug
//                         }
//                     }
//                 }
//             }
//         }
//     `)
// }