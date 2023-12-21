
import MailConfig from "../../config/email.js";

class Mail {
    private $subject = "";
    private $text = "";

    subject(Subject: string) {
        this.$subject = Subject;
        return this;
    }

    text(Text: string) {
        this.$text = Text;
        return this;
    }

    async send(To?: string) {
        try {
            const info = await MailConfig.transporter.sendMail({
                from: MailConfig.from,
                to: To,
                subject: this.$subject || MailConfig.default_subject,
                text: this.$text,
            })
            return info
        } catch (error) {
            return error;
        }
    }

    // bulkSend() {
    //     //
    // }
}

export default Mail;