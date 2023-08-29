import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react'
import { getCountries } from '../redux/actions'

const Home = (props)=>{

    const dispatch = useDispatch()

    const countries = useSelector(state => state.countries)

    useEffect(()=>{
        dispatch(getCountries())
    }, [])

    return(
        <div>
            <h1>Home</h1>
            <p>{countries}</p>
        </div>
    )
}

// const mapStateToProps = (state)=>{
// return{
//     countries: state.countries
// }
// }

// const mapDispatchToProps = ()=>{
// return{
//     getCountries: ()=> dispatch(getCountries()),
// }
// }


//export default connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home