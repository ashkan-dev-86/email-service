const mailProvider = require('../helpers/mail-provider');

/**
 * send email
 * @param {send email} req 
 */
exports.send = async (req) => {
  const sentMessageId = await mailProvider.mailSender(req);
  return sentMessageId;
};
