import React, {useState} from 'react';
import './Card.css';

export default function Card({datos, funcion}) {

  let input = '';
  console.log(input);
  const [inputSe, setInput] = useState('');   //[estado local, funcion cambiar estado local]

  const nombre = 'Rafa';
  const {name, height} = datos // const name = props.name, const height = props.height
  return (
    <div className='card'>
      <h1>{name}</h1>
      <h4>{height}</h4>
      <button onClick={()=>funcion(inputSe)}>Click</button>
      <input type='text' placeholder='Type a name' onChange={(e)=>setInput(e.target.value)}/>
      {/* <select>
        <option>opcion1</option>
        <option>opcion2</option>
        <option>opcion3</option>
        <option>opcion4</option>
      </select> */}
    </div>
  )
}