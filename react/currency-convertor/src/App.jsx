import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App()
{

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)



  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)
  // console.log(options)

  const swap = () =>
  {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }



  const convert = () =>
  {

    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <>
      <div className='vh-100' style={{ backgroundImage: `url(https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`, width: "100%", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <div className='container py-5'>
          <div className='row   border p-5 flex-column gy-3'>
            <form onSubmit={(e) =>
            {
              e.preventDefault()
              convert()
            }}>
              <div className="col">
                <InputBox
                  label={"From"}
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}

                />
              </div>
              <div className='text-center my-3'>
                <button type='button' className='btn btn-danger'
                  onClick={swap}
                >swap</button>

              </div>
              <div className="col">
                <InputBox
                  label={"To"}
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
            </form>
            <div className='text-center'>
              <button type='submit' className='btn btn-danger'> Convert {from.toUpperCase()} to {to.toUpperCase()}</button>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
