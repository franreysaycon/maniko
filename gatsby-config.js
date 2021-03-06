module.exports = {
  siteMetadata: {
    title: 'Maniko',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    '@chakra-ui/gatsby-plugin',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Maniko - Track Your PH Salary',
        short_name: 'Maniko',
        start_url: '/',
        background_color: '#6D597A',
        theme_color: '#FFFFFF',
        display: 'fullscreen',
        icon: 'src/images/icon.png',
      },
    },
  ],
};
