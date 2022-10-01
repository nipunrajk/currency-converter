import React from 'react'

const CurrencyRow = (props) => {
  const { currencyOptions, selectCurrency, onChangeCurrency } = props
  return (
    <div>
      <input type='number' className='input'></input>
      <select value={selectCurrency} onChange={onChangeCurrency}>
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
