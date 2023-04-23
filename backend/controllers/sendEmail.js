const nodeMailer = require("nodemailer");

const sendEmail = async (email) => {
    try {
        const transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            secure: true,
            auth: {
                user: 'juan.gamez.cs',
                pass: 'mmhcvhbjylwgpysa'
            }
        });

        await transporter.sendMail({
            from: 'juan.gamez.cs@gmail.com <juan.gamez.cs@gmail.com>',
            to: email,
            subject: 'Reset your password',
            html: '<a href="http://localhost:3001/changepw">Click this totally not suspicious link to reset your password!</a>'
        });
        console.log(email);
        console.log("Email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};

module.exports = sendEmail;