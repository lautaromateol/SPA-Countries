const {Router} = require('express')
const postActivity = require('../controllers/activity/postActivity')
const getActivities = require('../controllers/activity/getActivities')
const deleteActivity = require('../controllers/activity/deleteActivity')

const activityRouter = Router()

activityRouter.get('/', getActivities)

activityRouter.post('/', postActivity)

activityRouter.delete('/:id', deleteActivity)

module.exports = activityRouter