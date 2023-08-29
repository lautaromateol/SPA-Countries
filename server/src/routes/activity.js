const {Router} = require('express')
const postActivity = require('../controllers/activity/postActivity')
const getActivities = require('../controllers/activity/getActivities')

const activityRouter = Router()

activityRouter.get('/', getActivities)

activityRouter.post('/', postActivity)

module.exports = activityRouter