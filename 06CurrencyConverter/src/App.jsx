import { useState } from 'react'
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';



function App() {
  const[amount,setAmount]= useState(0)
  const[from, setFrom] = useState("usd");
  const[to, setTo] = useState("inr");
  const[convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert =()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-100 to-green-200 text-gray-900 font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6">
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Currency Converter
        </h1>
        
      </header>

      {/* Hero Section */}
<form
    onSubmit={(e) => {
        e.preventDefault();
        convert()
       
    }}
>
    <div className="w-full mb-1">
        <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
        />
    </div>
    <div className="relative w-full h-0.5">
        <button
            type="button"
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-green-900 text-white px-2 py-0.5"
            onClick={swap}
        >
            swap
        </button>
    </div>
    <div className="w-full mt-1 mb-4">
        <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
        />
    </div>
    <button type="submit" className="ml-[570px] w-[400px] bg-green-900 text-white px-4 py-3 rounded-lg">
        Convert {from.toUpperCase()} to {to.toUpperCase()}
    </button>
</form>

      {/* Footer */}
      <footer className="bg-gray-900 mt-auto text-white p-4 flex items-center justify-between text-sm px-8">
        <div className="flex items-center space-x-2">
          
        </div>
        <div>created by <strong>Shrishti</strong></div>
      </footer>
    </div>
  );
}

export default App;


   