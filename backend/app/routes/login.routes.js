module.exports = function(app){
    var controller = require('../controllers/login.controller')
    app.get('/check',controller.check)
    app.post('/povider',controller.provider)
}
