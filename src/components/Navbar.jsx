import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [input, setInput] = useState('');

  const handleChange = (e)=>{
    setInput(e.target.value);
  }

  return (
    <div>
      <input
        type='search'
        onChange={handleChange}
        placeholder="Type a character's name"
        id='inpuText' />
      <button onClick={() => { alert('Hice click') }}>SEARCH</button>
      <Link to='/home'>HOME</Link>
      <Link to='/create'>CREATE</Link>
    </div>
  )
}
