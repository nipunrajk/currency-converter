import React, { useEffect, useState } from 'react'
import './App.css'
import CurrencyRow from './CurrencyRow'
import { BASE_URL, requestOptions } from './Urls'

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])

  useEffect(() => {
    fetch(BASE_URL, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      })
  }, [])

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow currencyOptions={currencyOptions} />
      <div className='equals'>=</div>
      <CurrencyRow currencyOptions={currencyOptions} />
    </>
  )
}

export default App
