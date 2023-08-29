import axios from 'axios'

export const getCountries = ()=>{
const endpoint = 'http://localhost:3001/countries'
return async(dispatch)=>{
    const {data} = await axios.get(endpoint)
    return dispatch({
        type: 'GET_COUNTRIES',
        payload: data
    })
}
}