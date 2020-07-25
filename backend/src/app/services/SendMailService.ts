import Mail from '../../lib/Mail'
import { PersonProps } from '../schemas/Person'

class SendMailService {
  public async run (person: PersonProps) {
    const mail = new Mail()

    await mail.sendMail({
      to: `${person.name} <${person.email}>`,
      subject: 'Sorteio de Amigo Secreto',
      text: `O amigo secreto sorteado para você é ${person.friend}`
    })
  }
}

export default new SendMailService()
