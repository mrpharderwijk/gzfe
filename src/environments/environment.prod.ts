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
      url: '/v1/news',
      sources: '/v1/news/sources',
    },
    emergencies: {
      url: '/v1/emergencies',
      regions: '/v1/emergencies/regions',
    },
    tech: {
      url: '/v1/tech',
      sources: '/v1/tech/sources',
    },
    traffic: {
      url: '/v1/traffic',
    },
  },
};
