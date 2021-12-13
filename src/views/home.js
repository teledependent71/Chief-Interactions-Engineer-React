import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Chief Interactions Engineer</title>
        <meta property="og:title" content="Chief Interactions Engineer" />
      </Helmet>
    </div>
  )
}

export default Home
