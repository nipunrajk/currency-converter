import React from 'react'

const CurrencyRow = (props) => {
  const {
    currencyOptions,
    selectCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props
  return (
    <div>
      <input
        type='number'
        className='input'
        value={amount}
        onChange={onChangeAmount}
      ></input>
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
