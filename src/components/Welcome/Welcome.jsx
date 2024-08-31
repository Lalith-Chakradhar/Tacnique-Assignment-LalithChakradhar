import React from 'react';
import styles from './Welcome.module.css';

function Welcome() {
  return (
    <div className={styles.welcomeTextContainer}>
      <div className={styles.welcomeText}>Welcome</div>
    </div>
  )
}

export default Welcome;