"use strict";
const nodemailer = require("nodemailer");
const errs = require("../enums/err.enum");
const configs = require("../configs.js");

const config = configs.get(process.env.NODE_ENV);

exports.mailSender = async (req) => {
  if (!req.emailsToSend || !req.emailsToSend.length) {
    const err = {
      status: 400,
      msg: errs.NO_PROVIDED_EMAIL_TO_SEND,
    };
    throw err;
  }

  let transporter = nodemailer.createTransport({
    host: config.EMAIL_HOST,
    port: config.EMAIL_PORT,
    secure: config.EMAIL_SECURE,
    auth: {
      user: config.EMAIL_USER,
      pass: config.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: config.EMAIL_TLS,
    },
    headers: {
      api_key: config.EMAIL_KEY,
      "content-type": "application/json",
    },
  });

  let info;

  try {
    info = await transporter.sendMail({
      from: config.EMAIL_SENDER,
      to: req.emailsToSend.join(","),
      subject: req.subject || config.EMAIL_DEFAULT_SUBJECT,
      html: req.markup || config.EMAIL_DEFAULT_MARKUP,
    });
  } catch (err) {
    const error = {
      status: 400,
      msg: err.message,
    };
    throw error;
  }

  if (!info || !info.messageId) {
    const err = {
      status: 400,
      msg: errs.SEND_EMAIL_FAILED,
    };
    throw err;
  }

  return info;
};
