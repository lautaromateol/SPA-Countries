const {Activity} = require('../../db')

module.exports = async(req, res)=>{
    try {
        const {id} = req.params
        let activity = await Activity.findByPk(id)
        await activity.destroy()
        res.status(200).send('Actividad borrada con exito')
    } catch (error) {
        console.error
    }
}