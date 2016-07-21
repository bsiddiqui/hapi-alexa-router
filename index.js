'use strict'

exports.register = (server, options, next) => {
  server.route({
    method: 'POST',
    path: options.path,
    handler: (request, reply) => {
      options.alexa.dispatch(request.payload, request.headers).then(reply, reply)
    }
  })

  next()
}

exports.register.attributes = require('./package.json')
