const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.send({
  to: "diode002@yahoo.com",
  from: "diode002@yahoo.com",
  subject: "Sendiing for testing",
  text: "just a test"
});
