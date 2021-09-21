const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkRole = require('../middleware/checkRoleMW')

router.post('/', checkRole('ADMIN'),deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id',deviceController.getSingleDevice)

module.exports = router