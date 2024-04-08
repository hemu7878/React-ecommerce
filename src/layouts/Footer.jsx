import React from 'react'
import styles from "../styles/layouts/footer.module.css"
function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <p>&copy;  2035 by Bean Bliss Coffee Company  Powered and secured by BEAN BLISS.</p>
      </div>
      <ul className={styles.links}>
        <li>Privacy Policy</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Footer