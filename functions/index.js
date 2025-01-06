const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
admin.initializeApp();

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: "info@fbafound.org",
    pass: "d%@8XWaFG8thgpK2",
  },
});

exports.sendConfirmationEmail = functions.firestore
  .document("dummy/{dummyId}")
  .onCreate((snap, context) => {
    const dummy = snap.data();
    const mailOptions = {
      from: "info@fbafound.org",
      to: dummy.email,
      subject: "Thank You for Registering!",
      html: `
                <h1>Hello ${dummy.fullName}</h1>
                <p>Thank you for registering for our event! We're excited to have you join us.</p>
                <p>For more details, visit our <a href="https://fbafound.org/">event page</a>.</p>
                <img src="/fba-logo2" alt="Event Image" width="600" />
                <p>If you have any questions, feel free to reach out.</p>
            `,
    };

    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  });

/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
