const provider = require("./mail-provider");

test("Should send an email to specified email-addresses", async () => {
  const req = {
    emailsToSend: ["ashkan.aliabbasi@gmail.com", "ashkan65@hotmail.com"],
    subject: "Email tester for Pickles Auction",
    markup:
      "<h4>Send a test email to clarify in Pickles Auction assessment</h4>",
  };

  const info = await provider.mailSender(req);
  expect(info).not.toBeNull();
  if (!info || !info.messageId) {
    throw new Error('Email send service failed');
  } else {
    console.log(`Message ID: ${info.messageId}`);
  }
}, 15000);
