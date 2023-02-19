import React, { useState, useEffect } from 'react'
import Input from './components/Input'
import Button from './components/Button'
import './input.css'


function App() {
  return (
      <div className='w-100 h-screen bg-slate-400 flex items-center justify-center'>      
        <p className='w-80 min-h-[350px] bg-white'>
          <Input/>
          <Button />
        </p>
      </div>
  );
}

export default App;
