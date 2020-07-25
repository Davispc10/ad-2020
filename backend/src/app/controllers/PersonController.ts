import { Request, Response } from 'express'

import { Person } from '../schemas/Person'

class PersonController {
  public async index (req: Request, res: Response) {
    const people = await Person.find({}, { _id: true, name: true, email: true, friend: true })

    return res.json(people)
  }

  public async show (req: Request, res: Response) {
    const person = await Person.findById(req.params.id, { _id: true, name: true, email: true, friend: true })

    return res.json(person)
  }

  public async update (req: Request, res: Response) {
    const { name, email } = req.body

    const person = await Person.findByIdAndUpdate(req.params.id, { name: name, email: email })

    return res.json({
      _id: person._id,
      name,
      email
    })
  }

  public async store (req: Request, res: Response) {
    const { name, email } = req.body

    const person = new Person({ name, email })

    await person.save()

    return res.json(person)
  }

  public async delete (req: Request, res: Response) {
    await Person.findByIdAndDelete(req.params.id)

    return res.status(200).json({ message: 'OK' })
  }
}

export default new PersonController()
