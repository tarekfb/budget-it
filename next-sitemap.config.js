/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
module.exports = {
  // TODO: Changed to localhost, update to actual url when deployed [2023-01-02]
  /** Without additional '/' on the end, e.g. https://theodorusclarence.com */
  siteUrl: 'localhost:3000',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
