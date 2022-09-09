import React from 'react'
import {datosApi} from '../datos';
import Card from './Card';
import styles from './Cards.module.css';

export default function Cards() {

  console.log(datosApi);
  return (
    <div className={styles.container}>
      {
        datosApi.map(e=>(
          <Card datos={e}/>
        ))
      }
    </div>
  )
}
