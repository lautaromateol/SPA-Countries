const initialState = {
    countries: []
}

const reducer = (state = initialState, action)=>{
switch (action.type) {
    case 'GET_COUNTRIES':
        return{
            ...state,
            countries: action.payload
        }
    case 'FILTER':
        return {
            ...state, 
            countries: state.countries.filter(country => country.continents === action.payload)
        }
    case 'ORDER':       
        if(action.payload === '+') return {...state, countries: state.countries.sort((a, b)=> b.population - a.population)}
       
        if(action.payload === '-') return {...state, countries: state.countries.sort((a, b)=> a.population - b.population)}

    default: 
    return state
}
}

export default reducer;