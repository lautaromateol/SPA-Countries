import { connect, useSelector } from "react-redux";
import { useEffect, useState } from 'react'
import {getCountries, filterCountries, orderCountries} from '../../redux/actions'
import Card from "../Card/Card";
import './Home.css'

const Home = ({orderCountries, filterCountries, getCountries})=>{

    const countries = useSelector(state => state.countries)

    const [items, setItems] = useState([...countries].splice(0, 10))
    
    const [page, setPage] = useState(0)

    const [order, setOrder] = useState('')

    const [aux, setAux] = useState(false)
    
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
        if(event.target.value === '--Population--') return
        setOrder(event.target.value)
        orderCountries(event.target.value)
        setPage(0)
        setAux(!aux)
    }

    const handleFilter = async(event)=>{
        if(event.target.value === '--Continent--') return
        await getCountries()
        orderCountries(order)
        filterCountries(event.target.value)
        setPage(0)
        setAux(!aux)
    }

    const handleReset = async()=>{
        await getCountries()
        setPage(0)
        setAux(!aux)
    }

    useEffect(()=>{
        setItems([...countries].splice(0, 10))
    }, [aux])

    return(
        <div>
            <button onClick={handleReset}>Reset filters</button>
            <button onClick={prev}>{'<'}</button>
            <p id='pageNum'>{`${page + 1}`}</p>
            <button onClick={next}>{'>'}</button>
            <select onChange={handleOrder}>
                <option>--Population--</option>
                <option value='+'>More population</option>
                <option value='-'>Less population</option>
                {/* <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option> */}
            </select>
            <select onChange={handleFilter}>
                <option>--Continent--</option>
                <option value='South America'>South America</option>
                <option value='North America'>North America</option>
                <option value='Europe'>Europe</option>
                <option value='Asia'>Asia</option>
                <option value='Africa'>Africa</option>
                <option value='Oceania'>Oceania</option>
                <option value='Antarctica'>Antarctica</option>
            </select>
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

const mapDispatchToProps = (dispatch)=>{
    return{
        orderCountries: (order) => dispatch(orderCountries(order)),
        filterCountries: (continent) => dispatch(filterCountries(continent)),
        getCountries: ()=> dispatch(getCountries())
    }
}

export default connect(null, mapDispatchToProps)(Home)