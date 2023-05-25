import React from 'react';
import Item from './Item';
import styles from '../aula07/List.module.css';

function List() {
  return(
    <>
    <div className={styles.ListContainer}>
      <h1>Minha Lista</h1>
      <ul className={styles.ListContent}>
        <Item marca="Ferrari" ano_lancamento={1985}/>
        <Item marca="Fiat" ano_lancamento={1964}/> 
        <Item marca="Audi" ano_lancamento={2005}/>
        <Item marca="Chevrlolet" />
        <Item ano_lancamento={2002}/>
      </ul>
    </div>
    </>
  );
};

export default List;