const {Activity, Country} = require('../../db')

module.exports = async(req, res)=>{

    try {
        const {name, difficulty, duration, season, countries} = req.body

        if(!name || !difficulty || !season || !countries) return res.status(400).send('Falta informacion')

        let activity = await Activity.findOne({where : {name, difficulty, duration, season}})
        
        if(activity){ 
            countries.forEach(async(el) => {
                let country = await Country.findOne({where: {name: el}})
                await activity.addCountry(country)
            })
            return res.status(200).send(activity)
        }
        
        let find = await Activity.findOne({where: {name}})
        
        if(find) return res.status(400).send('Esta actividad ya existe')
        
        activity = await Activity.create({name, difficulty, duration, season})
        
        countries.forEach(async(el) => {
            let country = await Country.findOne({where: {name: el}})
            await activity.addCountry(country)})

        res.status(200).send(activity)
    
    } catch (error) {
        
        res.status(500).send(error.message)

    }
}