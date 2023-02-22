const BrainController = require('../controllers/brain.controller');

module.exports = (app)=>{
    app.get('/api', BrainController.index)
    app.get('/api/brain/:id', BrainController.findOne)
    app.get('/api/brains', BrainController.findAll)
    app.post('/api/brain/new', BrainController.create)
    app.put('/api/brain/edit/:id', BrainController.updateOne)
    app.delete('/api/brain/:id', BrainController.deleteOneBrain)
}