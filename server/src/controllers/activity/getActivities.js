const {Activity} = require('../../db')

module.exports = async(req, res)=>{
    try {
        
        let allActivities = await Activity.findAll()

        res.status(200).json(allActivities)

    } catch (error) {
        
        res.status(500).send(error.message)

    }
}