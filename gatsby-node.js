const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Job {
      allMarkdownRemark {
        nodes {
          frontmatter {
            id
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/job-detail/' + node.frontmatter.id,
      component: path.resolve('./src/templates/job-details.js'),
      context: { id: node.frontmatter.id }
    })
    actions.createPage({
      path: '/applicationForm/' + node.frontmatter.id,
      component: path.resolve('./src/templates/applicationForm.js'),
      context: { id: node.frontmatter.id }
    })
  })
  // data.allMarkdownRemark.nodes.forEach(node => {
  //   actions.createPage({
  //     path: '/applicationForm/' + node.frontmatter.id,
  //     component: path.resolve('./src/templates/applicationForm.js'),
  //     context: { id: node.frontmatter.id }
  //   })
  // })

}