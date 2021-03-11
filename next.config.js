const _ = require('lodash');
const path = require('path');

const ENV_KEY_LIST = [
  'NEXT_PUBLIC_API_URL',
  'NEXT_PUBLIC_BASE_URL',
  'NEXT_PUBLIC_OAUTH_GOOGLE_CLIENT_ID',
  'NEXT_PUBLIC_OAUTH_GOOGLE_SDK_URL',
  'NEXT_PUBLIC_OAUTH_NAVER_CLIENT_ID',
  'NEXT_PUBLIC_OAUTH_NAVER_SDK_URL',
];
ENV_KEY_LIST.forEach((key) => {
  if (!_.has(process.env, key)) {
    console.error(`${key} is not exist on process environment`);
    process.exit(1);
  }
});

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
