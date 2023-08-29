const {Country, Activity} = require('../../db')
const { Op } = require('sequelize')

module.exports = async(req, res)=>{
    const {name} = req.query
    if(name){
        try {
            let country = await Country.findOne({
            where: {
                name: {
                    [Op.iLike]: name
                }
            }, include: Activity
        })
        if(country) return res.status(200).json(country)
        return res.status(404).send('No se encontro el pais') 
    } catch (error) {
        return res.status(500).send(error.message)
    }
    }

    try {
        let allCountries = await Country.findAll()
        res.status(200).json(allCountries)
} catch (error) {
    res.status(500).send(error.message)
}
}