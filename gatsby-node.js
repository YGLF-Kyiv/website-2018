const path = require('path');
const fs = require('fs-extra-promise');
const sm = require('sitemap');
const _ = require('lodash/fp');
const config = require('./data/SiteConfig');

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
          layout: 'invitation',
          context: {
            path: node.path,
            ignoreInSitemap: true,
          },
        });
        createPage({
          path: `invitation/${node.path}/video`,
          component: path.resolve(`./src/templates/invitation.js`),
          layout: 'invitation',
          context: {
            path: node.path,
            track: true,
            ignoreInSitemap: true,
          },
        });
      });
      resolve()
    })
  })
};

exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  // Using the simple template for all pages now
  // const isPageSimple = function() {
  //   // these pages don't have the intro block
  //   const simplePages = [
  //     'successful-purchase',
  //     'code-of-conduct',
  //     'diversity',
  //     'sponsorship',
  //     'speakers'
  //   ];
  //   return simplePages.find((simplePage) => {
  //     return page.path.match(new RegExp(`/${simplePage}`));
  //   })
  // };

  return new Promise((resolve) => {
    if (page.path.match('/tickets')) {
      page.layout = 'tickets-redirect';
    } else {
      page.layout = 'simple';
    }
    createPage(page);
    resolve();
  })
};

function generateSiteMap() {
  const sitemap = sm.createSitemap({
    hostname: `http://${config.siteUrl}`,
    cacheTime: '60000',
    urls: config.sitemapPages.map((p) => ({
      url: p,
      changefreq: 'daily',
      priority: 0.7
    })),
  });
  console.log('Generating sitemap.xml');
  fs.writeFileSync(
    `${__dirname}/public/sitemap.xml`,
    sitemap.toString()
  )
}

exports.onPostBuild = () => {
  generateSiteMap();
};
