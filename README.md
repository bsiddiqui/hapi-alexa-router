# hapi-alexa-router

Plug [alexa-router](https://github.com/estate/alexa-router) into your hapi application.

### Usage

```javascript
server.register({
  register: require('hapi-alexa-router'),
  options: {
    alexa: alexa, // Your alexa-router instance
    path: '/webhook/alexa'
  }
})
```

### Testing

```bash
git clone https://github.com/estate/hapi-alexa-router && cd hapi-alexa-router
npm install && npm test
```
