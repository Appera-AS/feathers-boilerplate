import { Application } from '../../declarations'
import { healthPath } from './health.shared'

class HealthService {
  async find() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    }
  }
}

export const health = (app: Application) => {
  app.use(healthPath, new HealthService())
}
