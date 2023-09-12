import axios from 'axios'

export const getCountries = ()=>{
const endpoint = 'http://localhost:3001/countries'
return async(dispatch)=>{
    const {data} = await axios.get(endpoint)
    return dispatch({
        type: 'GET_COUNTRIES',
        payload: data
    })
}}

export const orderCountries = (order)=>{
        return {
            type: 'ORDER',
            payload: order
        }}

export const filterCountries = (continent)=>{
    return {
        type: 'FILTER',
        payload: continent
    }}


export const searchCountries = (country)=>{
    return {
        type: 'SEARCH',
        payload: country
    }
}

export const getActivities = ()=>{
    const endpoint = 'http://localhost:3001/activities'
    return async(dispatch)=>{
        const {data} = await axios.get(endpoint)
        return dispatch({
            type:'GET_ACTIVITIES',
            payload: data
        })
    }
}

export const findCountries = (countries)=>{
    return {
        type: 'FIND_COUNTRIES',
        payload: countries
    }
}