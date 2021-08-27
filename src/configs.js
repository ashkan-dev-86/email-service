const config = {
  production: {
    SECRET: process.env.SECRET,
    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_PORT: process.env.EMAIL_PORT,
    EMAIL_USER: process.env.EMAIL_USERNAME,
    EMAIL_PASS: process.env.EMAIL_PASSWORD,
    EMAIL_DEFAULT_SUBJECT: process.env.EMAIL_SUBJECT,
    EMAIL_DEFAULT_MARKUP: process.env.EMAIL_MARKUP,
    EMAIL_KEY: process.env.EMAIL_API_KEY,
    EMAIL_SENDER: process.env.EMAIL_SENDER,
  },
  default: {
    SECRET: "secretkey",
    EMAIL_HOST: "smtp.elasticemail.com",
    EMAIL_PORT: 2525,
    EMAIL_USER: "ashkan.aliabbasi@gmail.com",
    EMAIL_PASS: "60CA9189EB9AFAF68B886115D1F90638069E",
    EMAIL_DEFAULT_SUBJECT: "Email from a email delivery service",
    EMAIL_DEFAULT_MARKUP: "<b>Hello receiver</b>",
    EMAIL_KEY:
      "2AE6F24DE714621978F9793734E1143738700497E6B29BBB52A56982B774AE411C5238D17C0069043559B1482F25CDF5",
    EMAIL_SENDER: '"Email Service" <ashkan.aliabbasi@gmail.com>',
  },
};

exports.get = function get(env) {
  return config[env] || config.default;
};