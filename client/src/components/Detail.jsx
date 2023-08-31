import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const Detail = ()=>{

    const {id} = useParams()

    const [country, setCountry] = useState({})

    const getCountry = async()=>{
        try {
            const {data} = await axios.get(`http://localhost:3001/countries/${id}`)
            if(data.name) setCountry(data)
            else window.alert('No existe ese pais')
        } catch (error) {
            window.alert(error.message)
        }
    }

    useEffect(()=>{
        getCountry()
        return setCountry({})
    }, [id])

    return(
        <div>
            <h3>Id: {country.id}</h3>
            <h3>Name: {country.name}</h3>
            <img src={country.flagImage} width='300px' height='200px'/>
            <h4>Continents: {country.continents}</h4>
            <h4>Capital: {country.capital}</h4>
            <h4>Subregion: {country.subregion}</h4>
            <h4>Area: {country.area}</h4>
            <h4>Population: {country.population}</h4>
        </div>
    )


}

export default Detail;