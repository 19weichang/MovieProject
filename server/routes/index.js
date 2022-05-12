const user = require('./user')
const team = require('./team')

const routes = [
  user,
  team
]

module.exports = {
  install (app) {
    routes.forEach(route => route.install(app))
    // console.log('routes', routes);
  }
}
