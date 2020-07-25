import { Router } from 'express'

import PersonController from './app/controllers/PersonController'
import RaffleController from './app/controllers/RaffleController'
import validateStorePerson from './app/validators/StorePerson'

const routes = Router()

routes.get('/person', PersonController.index)
routes.get('/person/:id', PersonController.show)
routes.put('/person/:id', validateStorePerson, PersonController.update)
routes.post('/person', validateStorePerson, PersonController.store)
routes.delete('/person/:id', PersonController.delete)

routes.post('/raffles', RaffleController.store)

export default routes
