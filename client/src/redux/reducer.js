const initialState = {
    countries: [],
    backup: []
}

const reducer = (state = initialState, action)=>{
switch (action.type) {
    case 'GET_COUNTRIES':
        return{
            ...state,
            countries: action.payload,
            backup: action.payload
        }
    case 'FILTER':
        return {
            ...state, 
            countries: state.backup.filter(country => country.continents === action.payload)
        }
    case 'ORDER':       
        if(action.payload === '+') return {
            ...state,
            countries: state.countries.sort((a, b)=> b.population - a.population),
            backup: state.backup.sort((a, b)=> b.population - a.population)
            }
       
        if(action.payload === '-') return {
            ...state, 
            countries: state.countries.sort((a, b)=> a.population - b.population),
            backup: state.backup.sort((a, b)=> a.population - b.population)
        }

        if(action.payload === 'A-Z') return {
            ...state, 
            countries: state.countries.sort((a , b)=> a.name >b.name ? 1 : -1),
            backup: state.backup.sort((a , b)=> a.name >b.name ? 1 : -1)
        }

        if(action.payload === 'Z-A') return {
            ...state,
            countries: state.countries.sort((a , b)=> a.name <b.name ? 1 : -1),
            backup: state.backup.sort((a , b)=> a.name <b.name ? 1 : -1)}
        
        return 

    case 'SEARCH':
        return {
            ...state,
            countries :  state.backup.filter(({name})=> name.toLowerCase().includes(action.payload))
        }
    default: 
    return state
}
}

export default reducer;