const emailService = require("../services/email.service");

exports.signup = async function (req, res) {
  try {
    let data = await emailService.send(req.body);
    res.status(200).json({
      success: true,
      info: data,
    });
  } catch (err) {
    return res.status(err.status).json({
      success: false,
      errMsg: err.msg,
    });
  }
};