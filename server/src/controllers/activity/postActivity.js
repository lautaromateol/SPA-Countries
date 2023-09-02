const {Activity, Country} = require('../../db')

module.exports = async(req, res)=>{

    try {

        const {name, difficulty, duration, season, country} = req.body

        if(!name || !difficulty || !season || !country) return res.status(400).send('Falta informacion')

        if(difficulty < 1 || difficulty > 5) return res.status(400).send('La dificultad debe estar entre 1 y 5')

        if(!['Autumn', 'Winter', 'Spring', 'Summer'].includes(season)) return res.status(400).send('Proporciona una estacion valida')
        
        let activity = await Activity.findOne({where : {name, difficulty, duration, season}})

        let newCountry = await Country.findOne({where: {name: country}})

        if(activity) {
            await activity.addCountry(newCountry)
            return res.status(200).send('¡Actividad creada con exito!')
        }

        activity = await Activity.create({name, difficulty, duration, season})
        await activity.addCountry(newCountry)

        res.status(200).send('¡Actividad creada con exito!')
    
    } catch (error) {
        
        res.status(500).send(error.message)

    }
}