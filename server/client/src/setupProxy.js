// Just proxy config, similar to proxy on package.json
const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:5000' }))
}