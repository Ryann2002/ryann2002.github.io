module.exports = {
  pathPrefix: "/ryann2002.github.io",
  plugins: [require("tailwindcss")],
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
};
