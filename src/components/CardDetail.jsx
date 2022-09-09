import React from 'react';
import {useParams} from 'react-router-dom';
import { datosApi } from '../datos';

export default function CardDetail() {

  const id = useParams().id;
  const detail = datosApi.find(e=>{ //{}
    return e.id==id
  })
  console.log(detail);
  
  
  return (
    <div>
      <p>{detail?.id}</p>
      <p>{detail?.name}</p>
      <p>{detail?.height}</p>
      <p>{detail?.gender}</p>
      <p>{detail?.mass}</p>
      <p>{detail?.eye_color}</p>
    </div>
  )
}
