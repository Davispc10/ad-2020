import nodemailer, { Transporter } from 'nodemailer'

import MailConfig from '../config/mail'

interface IMessage {
  to: string,
  subject: string,
  text: string
}

class Mail {
  public transporter: Transporter
  public config: MailConfig

  constructor () {
    this.config = new MailConfig()

    this.transporter = nodemailer.createTransport({
      host: this.config.host,
      port: this.config.port,
      secure: this.config.secure,
      auth: this.config.auth
    })
  }

  sendMail (message: IMessage): Promise<any> {
    return this.transporter.sendMail({
      ...this.config.default,
      ...message
    })
  }
}

export default Mail
