import { Request, Response } from 'express'
import sleep from 'sleep'

import { Person } from '../schemas/Person'
import SendMailService from '../services/SendMailService'

class RaffleController {
  public async store (req: Request, res: Response) {
    const people = await Person.find()

    // ramdom order
    for (let i = 0; i < people.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));

      [people[i], people[j]] = [people[j], people[i]]
    }

    // set secret friend
    for (let i = 0; i < people.length; i++) {
      if (i === people.length - 1) {
        people[i].friend = people[0].name
      } else {
        people[i].friend = people[i + 1].name
      }

      await people[i].save()
    }

    // send email per second
    for (let i = 0; i < people.length; i++) {
      sleep.sleep(1)
      await SendMailService.run(people[i])
    }

    return res.json(people)
  }
}

export default new RaffleController()
