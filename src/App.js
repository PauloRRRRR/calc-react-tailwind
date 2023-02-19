import React, { useState, useEffect } from 'react'
import Input from './components/Input'
import Button from './components/Button'
import './input.css'


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('')
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
    }else{
      const sum = Number(firstNumber)+Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }
  
  const handleMinusNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    }else{
      const sum = Number(firstNumber)-Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMultNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    }else{
      const sum = Number(firstNumber)*Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleDivideNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    }else{
      const sum = Number(firstNumber)/Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
          default: 
          break;
      }
    }
  }

  return (
      <div className='w-100 h-screen bg-slate-400 flex items-center justify-center'>      
        <p className='w-80 min-h-[270px] bg-white'>
          <Input value={currentNumber} />
          <div className='flex flex-row content-between items-center'>
            <Button label='x' onClick={() => handleAddNumber('x')} />
            <Button label='/' onClick={handleDivideNumbers} />
            <Button label='C' onClick={() => handleOnClear()} />
            <Button label='*' onClick={handleMultNumbers} />
          </div>
          <div className='flex flex-row content-between items-center'>
            <Button label='7' onClick={() => handleAddNumber('7')} />
            <Button label='8' onClick={() => handleAddNumber('8')} />
            <Button label='9' onClick={() => handleAddNumber('9')} />
            <Button label='-' onClick={handleMinusNumbers} />
          </div>
          <div className='flex flex-row content-between items-center'>
            <Button label='4' onClick={() => handleAddNumber('4')} />
            <Button label='5' onClick={() => handleAddNumber('5')} />
            <Button label='6' onClick={() => handleAddNumber('6')} />
            <Button label='+' onClick={handleSumNumbers} />
          </div>
          <div className='flex flex-row content-between items-center'>
            <Button label='1' onClick={() => handleAddNumber('1')} />
            <Button label='2' onClick={() => handleAddNumber('2')} />
            <Button label='3' onClick={() => handleAddNumber('3')} />
            <Button label='=' onClick={handleEquals} />
          </div>
        </p>
      </div>
  );
}

export default App;
