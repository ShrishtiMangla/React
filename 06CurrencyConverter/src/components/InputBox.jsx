import React, {useId} from 'react'


export function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className="",
}) {
  const amountInputId = useId()
  return (
    <div className={`mx-auto bg-green-200 w-[500px] outline p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
      <label htmlFor={amountInputId} className="text-black mb-2">{label}</label>
      <div className="relative flex items-center rounded-md border border-gray-300 bg-white">
      <input   className="border border-gray-300 rounded-md p-2 w-full"
       id = {amountInputId}
       type="number"
      placeholder="0.00"
      disabled = {amountDisable}
      value = {amount}
      onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
      />
     
      </div>
      </div>
      <div className="w-1/2">
      <p className = "text-black mb-2">Currency Type</p>
      <select className="rounded-lg cursor-pointer px-1 py-1 "
      value = {selectCurrency}
      onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
      disabled = {currencyDisable}>
        {currencyOptions.map((currency)=>(
          <option key = {currency} value={currency}>{currency}</option>
        ))}
      </select>
      </div>
    </div>
  );
}
export default InputBox;