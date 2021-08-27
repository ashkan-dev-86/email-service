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
    EMAIL_USER: "ashi.dev@aol.com",
    EMAIL_PASS: "6B835612971CB680E59023E597FB524B0B97",
    EMAIL_DEFAULT_SUBJECT: "Email from a email delivery service",
    EMAIL_DEFAULT_MARKUP: "<b>Hello receiver</b>",
    EMAIL_KEY:
      "A8662C243B31A1DFB9CBBCBA6B3D64E9619D1563EDF6F84B8739FE6A98433BDB5B6DE866EFF2F52835A12927208562ED",
    EMAIL_SENDER: '"Email Service" <ashi.dev@aol.com>',
  },
};

exports.get = function get(env) {
  return config[env] || config.default;
};
