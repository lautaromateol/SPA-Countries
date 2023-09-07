import { useEffect, useState } from "react"
import {getCountries} from '../../redux/actions'
import {useDispatch, useSelector} from 'react-redux'
import axios from "axios"
import style from './FormActivity.module.css'

const FormActivity = ()=>{

const [data, setData] = useState({
    name: '',
    difficulty: 0,
    duration: 0,
    season: '',
    countries: []
})

const countries = useSelector(state=> state.countries)

const dispatch = useDispatch()

const [aux, setAux] = useState(false)

const [errors, setErrors] = useState('')

const handleCountries = (event)=>{
    setAux(false)
    setData({
        ...data,
        countries: [...data.countries, event.target.value]
    })
}

const handleChange = (event)=>{
    setAux(false)
    setData({
        ...data,
        [event.target.name]: event.target.value
    })
}

const handleSubmit = async(event)=>{
    event.preventDefault()
    if(!data.name || !data.difficulty || !data.season || !data.countries) setErrors('Falta informacion')
    await axios.post('http://localhost:3001/activities', data)
    event.target.reset()
    setData({
        name: '',
        difficulty: 0,
        duration: 0,
        season: '',
        countries: []
    })
    setErrors('')
    setAux(true)
}

const handleDelete = (event)=>{
setData({
    ...data,
    countries: data.countries.filter((cr)=> cr !== event.target.value)
})
}

const difficulty = [1, 2, 3, 4, 5]

const duration = []

for(let i = 1; i <= 24; i++){
    duration.push(i)
}

const season = ['Summer', 'Autumn', 'Winter', 'Spring' ]

useEffect(()=>{
dispatch(getCountries())
}, [])


return(
    <div class={style.contenedor}>
        <form onSubmit={handleSubmit}>
            <div class={style.input}>
            <label>Name</label>
            <input type="text" name="name" onChange={handleChange}/>
            </div>

            <div class={style.input}>
            <label>Difficulty</label>
            <select onChange={handleChange} name='difficulty'>
                <option hidden>--Difficulty--</option>
                {difficulty.map(dif=><option value={dif} >{dif}</option>)}
            </select>
            </div>

            <div class={style.input}>
            <label>Duration(Hours)</label>
            <select onChange={handleChange} name='duration'>
                <option hidden>--Duration--</option>
                {duration.map(dur=> <option value={dur}>{dur}</option>)}
            </select>
            </div>

            <div class={style.input}>
            <label>Season</label>
            <select onChange={handleChange} name='season'>
                <option hidden>--Season--</option>
                {season.map(sea=> <option value={sea} >{sea}</option>)}
            </select>
            </div>
            
            <div class={style.input}>
            <label>Country</label>
            <select onChange={handleCountries} name='countries'>
                <option hidden>--Countries--</option>
                {countries.map(country=> <option value={country.name} >{country.name}</option>)}
            </select>
            </div>

            {data.countries.length ? data.countries.map((cr) => {
                return (
                    <div id={style.countries_selected}>
                    <p id={style.country}>{cr}</p>
                    <button id={style.delete} onClick={handleDelete} value={cr}>X</button>
                    </div>
                )
            }) : ''}

            <button id={style.submit}>Submit</button>
            {aux ? <p>¡Actividad creada con exito!</p> : <p>{errors}</p>}
        </form>
    </div>
)
}

export default FormActivity;