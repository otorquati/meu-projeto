import React from 'react';
import Item from './Item';
import styles from './aula07/List.module.css';

function List() {
  return(
    <>
    <div className={styles.ListContainer}>
      <h1>Minha Lista</h1>
      <ul className={styles.ListContent}>
        <Item marca="Ferrari"/>
        <Item marca="Fiat"/>
        <Item marca="Audi"/>
      </ul>
    </div>
    </>
  );
};

export default List;