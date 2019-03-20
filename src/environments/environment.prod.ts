export const environment = {
  production: true,
  domain: {
    gzfe: {
      BASE: 'https://gzfe.herokuapp.com',
    },
    gzbe: {
      BASE: 'https://gzbe.herokuapp.com',
    },
  },
  serviceUrls: {
    users: {
      url: '/v1/users',
    },
    auth: {
      signIn: '/v1/sign-in',
      signUp: '/v1/sign-up',
      signOut: '/v1/sign-out',
      profile: '/v1/profile',
    },
    news: {
      sources: '/v1/sources',
      headlines: '/v1/sources/headlines',
    },
  },
};
