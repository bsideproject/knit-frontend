const _ = require('lodash');
const path = require('path');

// const Dotenv = require('dotenv');
// Dotenv.config();

const ENV_KEY_LIST = [
  'NEXT_PUBLIC_BASE_URL',
  'NEXT_PUBLIC_API_URL',
  'NEXT_PUBLIC_AUTH_CLIENT_ID_GOOGLE',
  'NEXT_PUBLIC_AUTH_CLIENT_ID_NAVER',
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
