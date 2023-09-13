const {Country, Activity} = require('../../db')
const { Op } = require('sequelize')

module.exports = async(req, res)=>{
    try {
        
        const {name} = req.query

        if(name){
           
            let country = await Country.findOne({
            where: {
                name: {
                    [Op.iLike]: name
                }
            }, attributes: {
                exclude: ['updatedAt', 'createdAt'],
            },
            include: {
                model: Activity,
                through: {
                    attributes: []
                }}
        })

        if(country) return res.status(200).json(country)

        return res.status(404).send('No se encontro el pais') 

    }

    let allCountries = await Country.findAll()

    res.status(200).json(allCountries)

} catch (error) {

    res.status(500).send(error.message)
    
}
}



 