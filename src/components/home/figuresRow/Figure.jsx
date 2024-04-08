import React from 'react'
import CountUp from 'react-countup';
import styles from "../../../styles/home/figuresRow.module.css";

function Figure(props) {
  return (
<div className={styles.figureContainer}>
      <h2>
        <CountUp end={props.figure} />+
      </h2>
      <p>{props.desc}</p>
    </div>  )
}

export default Figure