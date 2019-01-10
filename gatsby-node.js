const path = require(`path`)
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

exports.createPages = ({ graphql, actions}) => {
    const { createPage } = actions
    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            subtitle
                            roles
                        }
                        html
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(
        result => {
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/project-detail.js`),
                    context: {
                        slug: node.fields.slug,
                    },
                })
            })
        }
    )
}