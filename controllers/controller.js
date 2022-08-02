const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIN_USER,
    pass: process.env.MAIN_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

const getIndex = (req, res) => {
    return res.render('index');
}

const sendMessage = async (req, res) => {
    const { senderUsername, senderEmail, message } = req.body;
    var mailOptions = {
        from: process.env.MAIN_USER,
        to: process.env.MY_EMAIL,
        subject: `Portfolio <- ${senderEmail}`,
        html: templateHtml(senderEmail, senderUsername, message)
    };
    await transporter.sendMail(mailOptions, function (error, info) {
        res.send({
            status: error ? false : true,
            message: error ? 'Failed to send message. Please, try again.' : 'Your message has been sent successfuly'
        });
        transporter.close();
    });
}

const templateHtml = (senderEmail, senderUsername, message) => `<div style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 400px; padding: 10px 30px;  background: #eee;">
        <h4 style="padding: 8px 6px; color: #DA534B; margin: 0;">Message from Portfolio</h4>
        <div style="background: #eee">
            <p style="color: rgb(33, 35, 41); padding: 10px; margin: 0; font: 14px 'segoe ui'; line-height: 1.5em; white-space: pre-wrap;">${message}</p>
        </div>
        <div style="border-top: 1px solid #ccc; width: 100%;">
            <p style="color: rgb(33, 35, 41); line-height: 1.5em;">
                <b>From:</b> ${senderEmail} <br>
                <b>Username:</b> ${senderUsername} <br>
                <b>Date:</b> ${new Date().toLocaleString()}
            </p>
        </div>
    </div>
</div>`;

module.exports = { getIndex, sendMessage };