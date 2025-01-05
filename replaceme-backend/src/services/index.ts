import { user } from './users/users'
import { health } from './health/health'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export type ServiceTypes = {
  users: any
  health: any
  authentication: any
}

export const services = (app: Application) => {
  app.configure(user)
  app.configure(health)
  // All services will be registered here
}
