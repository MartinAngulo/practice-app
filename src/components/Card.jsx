import React, { useState } from 'react';
import styles from './Card.module.css';
import {Link} from 'react-router-dom';

export default function Card({ datos }) {

  return (
    <div className={styles.card}>
      <Link to={`/detail/${datos.id}`}>
        <h1>NOMBRE: {datos.name}</h1>
        <h1>ALTURA: {datos.height}</h1>
        <h1>GENERO: {datos.gender}</h1>
      </Link>
    </div>
  )
}