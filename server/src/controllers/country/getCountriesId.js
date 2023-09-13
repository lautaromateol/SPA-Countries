const {Country, Activity} = require('../../db')
const {Op} = require('sequelize')

module.exports = async(req, res) =>{
    try {
        
        const {countryId} = req.params
        
        let country = await Country.findOne({where: {
            id: {
                [Op.iLike]: countryId}}, attributes: {
                    exclude: ['updatedAt', 'createdAt'],
                },
                include: {
                    model: Activity,
                    through: {
                        attributes: []
                    }}
            })

        if(!country) return res.status(404).send('No se encontro el pais')
        
        res.status(200).json(country)
        
    } catch (error) {
        
        res.status(500).send(error.message)
    
    }
}


