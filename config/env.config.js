export default {
    VUE_REQUEST_TIMEOUT: 10000,
    development: {
      NODE_ENV: "development",
      VUE_APP_BASE_API_SUFFIX: "api",
      VUE_APP_BASE_API: 'https://ycq.stttttt.com1',
      WEB_VIEW_URL: ''
    },
    production: {
      NODE_ENV: "production",
      VUE_APP_BASE_API_SUFFIX: "api",
      VUE_APP_BASE_API: 'https://ycq.stttttt.com2',
      WEB_VIEW_URL: ''
    },
    test: {
      NODE_ENV: "test",
      VUE_APP_BASE_API_SUFFIX: "api",
      VUE_APP_BASE_API: 'https://ycq.stttttt.com3',
      WEB_VIEW_URL: ''
    },
  };
  