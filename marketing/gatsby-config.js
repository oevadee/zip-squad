const path = require("path");

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "ZIP Squad",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          api: path.resolve(__dirname, "/src/api"),
          assets: path.resolve(__dirname, "/src/assets"),
          components: path.resolve(__dirname, "/src/components"),
          constants: path.resolve(__dirname, "/src/constants"),
          helpers: path.resolve(__dirname, "/src/helpers"),
          layouts: path.resolve(__dirname, "/src/layouts"),
          hooks: path.resolve(__dirname, "/src/hooks"),
          locales: path.resolve(__dirname, "/src/locales"),
          styles: path.resolve(__dirname, "/src/styles"),
          utils: path.resolve(__dirname, "/src/utils"),
          pages: path.resolve(__dirname, "/src/pages"),
          router: path.resolve(__dirname, "/src/router"),
          views: path.resolve(__dirname, "/src/views/*"),
        },
        extensions: [],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["roboto mono"],
        display: "swap",
      },
    },
  ],
};
