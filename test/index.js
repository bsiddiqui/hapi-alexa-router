'use strict'

let lab = exports.lab = require('lab').script()
let expect = require('code').expect
let Hapi = require('hapi')

let hapiAlexaRouter = require('../')
let fixtures = require('alexa-router/test/fixtures')

lab.describe('general', () => {
  lab.test('should work', (cb) => {
    let server = new Hapi.Server()
    server.connection()

    server.register({
      register: hapiAlexaRouter,
      options: {
        alexa: fixtures.simpleRouting(),
        path: '/alexa'
      }
    }, err => {
      expect(err).to.not.exist()

      server.inject({
        method: 'POST',
        url: '/alexa',
        payload: fixtures.HELLO_WORLD_REQUEST
      }, res => {
        expect(res.statusCode).to.equal(200)
        expect(res.result.raw.response.outputSpeech.text).to.equal('Hello world!')
        cb()
      })
    })
  })
})
