import React, { useId } from 'react'

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = ""
}) =>
{
    const amountInputId = useId()
    // console.log(currencyOptions)
    return (
        <div className='shadow-lg'>
            <div className='row bg-white p-3'>
                <div className='col'>
                    <div className="mb-3">
                        <label htmlFor={amountInputId} className="form-label">{label}</label>
                        <input type="number" className="form-control" id={amountInputId} placeholder="Amount"
                            disabled={amountDisable}
                            value={amount}
                            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                        />
                    </div>
                </div>
                <div className='col'>
                    <label className="form-label">Currency Type</label>
                    <select className="form-select" aria-label="Default select example"
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencyDisable}
                    >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
            </div>

        </div>
    )
}

export default InputBox