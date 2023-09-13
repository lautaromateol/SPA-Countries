const {Activity} = require('../../db')

module.exports = async(req, res)=>{
    try {
        const {id} = req.params

        let activity = await Activity.findByPk(id)

        await activity.destroy()

        res.status(200).send('Actividad borrada con exito')

    } catch (error) {

        res.status(500).send(error.message)
        
    }
    
}