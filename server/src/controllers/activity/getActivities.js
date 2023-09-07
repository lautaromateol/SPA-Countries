const {Activity, Country} = require('../../db')

module.exports = async(req, res)=>{
    try {
        
        let allActivities = await Activity.findAll({attributes: {
            exclude: ['updatedAt', 'createdAt'],
        },
        include: {
            model: Country,
            through: {
                attributes: []
            }}})

        res.status(200).json(allActivities)

    } catch (error) {
        
        res.status(500).send(error.message)

    }
}