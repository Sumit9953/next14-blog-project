import Image from 'next/image'
import React from 'react'

import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div>
    <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/5054141/pexels-photo-5054141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='about-png' fill />
    </div>
    </div>
  )
}

export default AboutPage