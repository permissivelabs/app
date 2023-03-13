module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/account',
          permanent: true,
        },
      ]
    },
  }