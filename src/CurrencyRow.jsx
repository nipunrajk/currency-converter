import React from 'react'

const CurrencyRow = (props) => {
  const { currencyOptions } = props
  return (
    <div>
      <input type='number' className='input'></input>
      <select>
        {currencyOptions.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CurrencyRow
