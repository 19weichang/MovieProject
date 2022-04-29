const user = require('./user')

const routes = [
  user
]

module.exports = {
  install (app) {
    routes.forEach(route => route.install(app))
    // console.log('routes', routes);
  }
}
