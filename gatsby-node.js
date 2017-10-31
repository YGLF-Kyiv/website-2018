const path = require('path');

// exports.onCreateNode = ({ node }) => {
//   console.log(node.internal.type)
// };

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allInvitation(limit: 1000) {
          edges {
            node {
              id
              path
              video
            }
          }
        }
      }
    `
    ).then(result => {
      result.data.allInvitation.edges.map(({ node }) => {
        // console.log(JSON.stringify(node, null, 4));
        createPage({
          path: `invitation/${node.path}`,
          component: path.resolve(`./src/templates/invitation.js`),
          context: {
            path: node.path,
          },
        })
      });
      resolve()
    })
  })
};
