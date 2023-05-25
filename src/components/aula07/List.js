import React from 'react';
import styles from './List.module.css';
function List() {
  return(
    <>
    <div className={styles.ListContainer}>
      <h1>Minha Lista</h1>
      <ul className={styles.ListContent}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
    </>
  );
};

export default List;