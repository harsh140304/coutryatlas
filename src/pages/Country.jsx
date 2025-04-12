import React, { useTransition } from 'react'
import { useEffect ,useState } from 'react'
import { getCountryData } from '../api/postApi'
import Loader from '../components/UI/Loader'
import CountryCard from '../components/Layout/CountryCard'

const Country = () => {

 const [isPending, startTransition] = useTransition()
const [countries, setcountries] = useState([])
  useEffect(() => {
    startTransition(async()=>{
     const res =  await getCountryData();
     setcountries(res.data);
    })
  
  }, [])
    if(isPending) return <Loader/>

  return <section className='country-section'>
    <ul className='grid grid-four-cols'>
      {
        countries.map((curCountry, index) => {
          return <CountryCard  country={curCountry} key = {index}/>
        })
      }

    </ul>

  </section>
}

export default Country
