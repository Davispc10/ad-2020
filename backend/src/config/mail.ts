interface IAuth {
  user: string,
  pass: string
}

interface IDefaultFrom {
  from: string
}

class MailConfig {
  public host: string
  public port: number
  public secure: boolean
  public auth: IAuth
  public default: IDefaultFrom

  constructor () {
    this.host = process.env.MAIL_HOST
    this.port = Number(process.env.MAIL_PORT)
    this.secure = false
    this.auth = {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
    this.default = {
      from: 'Amigo Secreto <noreply@secretfriend.com'
    }
  }
}

export default MailConfig
