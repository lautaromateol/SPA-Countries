import { useEffect, useState } from "react"
import {getCountries} from '../../redux/actions'
import {useDispatch, useSelector} from 'react-redux'

const FormActivity = ()=>{

const [data, setData] = useState({
    name: '',
    difficulty: 0,
    duration: 0,
    season: '',
    country: ''
})

const dispatch = useDispatch()

const countries = useSelector(state=> state.countries)

const handleChange = (event)=>{
    setData({
        ...data,
        [event.target.name]: event.target.value
    })
}

const handleSubmit = (event)=>{
console.log(data)
event.preventDefault()
}

const difficulty = [1, 2, 3, 4, 5]

const duration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

const season = ['Summer', 'Autumn', 'Winter', 'Spring' ]

useEffect(()=>{
dispatch(getCountries())
}, [])


return(
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" onChange={handleChange}/>
            <br />
            <label>Difficulty</label>
            <select onChange={handleChange} name='difficulty'>
                <option hidden>--Difficulty--</option>
                {difficulty.map(dif=><option value={dif} >{dif}</option>)}
            </select>
            <br />
            <label>Duration(Hours)</label>
            <select onChange={handleChange} name='duration'>
                <option hidden>--Duration--</option>
                {duration.map(dur=> <option value={dur}>{dur}</option>)}
            </select>
            <br />
            <label>Season</label>
            <select onChange={handleChange} name='season'>
                <option hidden>--Season--</option>
                {season.map(sea=> <option value={sea} >{sea}</option>)}
            </select>
            <br />
            <label>Country</label>
            <select onChange={handleChange} name='country'>
                <option hidden>--Country--</option>
                {countries.map(country=> <option value={country.name} >{country.name}</option>)}
            </select>
            <br/>
            <button>Submit</button>
        </form>
    </div>
)
}

export default FormActivity;