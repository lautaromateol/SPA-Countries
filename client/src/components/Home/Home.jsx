import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react'
import {getCountries, filterCountries, orderCountries, searchCountries} from '../../redux/actions'
import Card from "../Card/Card";
import style from './Home.module.css'

const Home = ()=>{

    const dispatch = useDispatch()

    const countries = useSelector(state => state.countries)

    const [items, setItems] = useState([...countries].splice(0, 10))
    
    const [page, setPage] = useState(0)

    const [aux, setAux] = useState(false)

    const [data, setData] = useState('')
    
    const next = ()=>{
        let nextPg = page + 1
        let index = nextPg * 10
        if(index >= countries.length) return
        setItems([...countries].splice(index, 10))
        setPage(page + 1)
    }

    const prev = ()=>{
        let prevPg = page - 1
        let index = prevPg * 10
        if(page === 0) return
        setItems([...countries].splice(index, 10))
        setPage(page - 1)
    }
    
    const handleOrder = (event)=>{
        dispatch(orderCountries(event.target.value))
        setPage(0)
        setAux(!aux)
    }

    const handleFilter = (event)=>{
        dispatch(filterCountries(event.target.value))
        setPage(0)
    }

    const handleReset = async()=>{
        await dispatch(getCountries())
        setPage(0)
    }

    const handleChange = (event)=>{
        setData(event.target.value)
    }
    
    const handleSubmit = ()=>{
        dispatch(searchCountries(data))
    }

    useEffect(()=>{
        setItems([...countries].splice(0, 10))
    }, [countries, aux])

    return(
        <div id={style.contenedor}>
            <div id={style.botones}>
            <button class={style.boton} onClick={handleReset}>Reset filters</button>
            <button class={style.boton} onClick={prev}>{'<'}</button>
            <p id={style.pageNum}>{`${page + 1}`}</p>
            <button class={style.boton} onClick={next}>{'>'}</button>
            <select class={style.filtro} onChange={handleOrder}>
                <option hidden>--Population--</option>
                <option value='+'>More population</option>
                <option value='-'>Less population</option>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
            </select>
            <select class={style.filtro} onChange={handleFilter}>
                <option hidden>--Continent--</option>
                <option value='South America'>South America</option>
                <option value='North America'>North America</option>
                <option value='Europe'>Europe</option>
                <option value='Asia'>Asia</option>
                <option value='Africa'>Africa</option>
                <option value='Oceania'>Oceania</option>
                <option value='Antarctica'>Antarctica</option>
            </select>
            <input id={style.searchbar} onChange={handleChange} type="searchbar" placeholder="Search..."></input>
            <button id={style.lupa} onClick={handleSubmit}>🔍︎</button>
            </div>
            {items.map((country)=>{
                return(
                <Card
                id={country.id}
                name={country.name}
                flagImage={country.flagImage}
                continents={country.continents}
                />
                )
            })}
        </div>
    )
}

export default Home