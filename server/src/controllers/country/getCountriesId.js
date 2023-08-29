const {Country, Activity} = require('../../db')
const {Op} = require('sequelize')

module.exports = async(req, res) =>{
    try {
        
        const {countryId} = req.params
        
        let {dataValues} = await Country.findOne({where: {
            id: {
                [Op.iLike]: countryId}}, include: Activity
            })
        
        res.status(200).json(dataValues)
        
    } catch (error) {
        
        res.status(500).send(error.message)
    
    }
}