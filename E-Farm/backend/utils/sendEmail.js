const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    // Create a transporter
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        // If your SMTP requires SSL (like Gmail), use this:
        // secure: true, 
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD
        }
    });

    // Mail options
    const mailOptions = {
        from: process.env.SMTP_MAIL,  // sender address
        to: options.email,            // list of receivers
        subject: options.subject,     // subject line
        html: options.data            // HTML body content
    };

    // Send email
    await transporter.sendMail(mailOptions);
};


module.exports = sendEmail;