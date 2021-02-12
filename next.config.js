const _ = require('lodash');
const path = require('path');

['NEXT_PUBLIC_BASE_URL'].forEach((key) => {
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
