// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
