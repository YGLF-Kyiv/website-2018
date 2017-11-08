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
          layout: 'simple',
          context: {
            path: node.path,
          },
        });
        createPage({
          path: `invitation/${node.path}/video`,
          component: path.resolve(`./src/templates/invitation.js`),
          layout: 'simple',
          context: {
            path: node.path,
            track: true,
          },
        });
      });
      resolve()
    })
  })
};

exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve) => {
    if (page.path.match(/^\/successful-purchase/)) {
      page.layout = "simple";
      createPage(page)
    }

    resolve()
  })
};
