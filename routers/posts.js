import express from 'express'
import postsController from '../controllers/postsController.js'
const router = express.Router()

//ROTTE CRUD//

//index
router.get('/', postsController.index)

//show
router.get('/:id', postsController.show)



export default router