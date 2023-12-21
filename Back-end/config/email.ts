import nodemailer from "nodemailer";

export default {
    from: "info@farhadflhp.ir",
    default_subject: "kallii-mail",
    transporter: nodemailer.createTransport({
        host: "mail.farhadflhp.ir",
        port: 465,
        secure: true,
        auth: {
            user: "info@farhadflhp.ir",
            pass: "mynameisFarhad1372!",
        }
    })
}   