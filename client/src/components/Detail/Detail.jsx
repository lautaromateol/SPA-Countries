import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import style from './Detail.module.css'

const Detail = ()=>{

    const {id} = useParams()

    const [country, setCountry] = useState({})

    const [activities, setActivities] = useState([])

    const [aux, setAux] = useState(false)

    const getCountry = async()=>{
        try {
            const {data} = await axios.get(`http://localhost:3001/countries/${id}`)
            if(data) setCountry(data)
            else window.alert('No existe ese pais')
        } catch (error){
            window.alert(error.message)
        }
    }

    const getActivities = async()=>{
        try {
            const {data} = await axios.get(`http://localhost:3001/countries/${id}`)
            if(data) setActivities(data.Activities)
        } catch (error){
            window.alert(error.response.data)
        }
    }

    const handleDelete = async(event)=>{
        const id = event.target.value
        await axios.delete(`http://localhost:3001/activities/${id}`)
        setAux(!aux)
    }

    useEffect(()=>{
        getCountry()
        getActivities()
    }, [id, aux])

    return(
        <div id={style.contenedor}>
            <h3>Id: {country.id}</h3>
            <h3>Name: {country.name}</h3>
            <img src={country.flagImage} width='300px' height='200px'/>
            <h4>Continents: {country.continents}</h4>
            <h4>Capital: {country.capital}</h4>
            <h4>Subregion: {country.subregion}</h4>
            <h4>Area: {country.area}</h4>
            <h4>Population: {country.population}</h4>
            {activities.length ? <h4 id={style.actividades}>Activities: </h4> : ''}
            {activities.map((act)=> {
                return(
                    <div id={style.card}>
                    <button id={style.borrar} onClick={handleDelete} value={act.id}>🗑️</button>
                    <h5>{act.name}</h5>
                    <p id={style.descripcion}>Difficulty: {act.difficulty}</p>
                    <p id={style.descripcion}>Duration: {act.duration} hours</p>
                    <p id={style.descripcion}>Season: {act.season}</p>
                    </div>
                )
            })}
        </div>
    )


}

export default Detail;