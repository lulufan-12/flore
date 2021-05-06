import Head from 'next/head'
import Header from '../components2/Header'
import Footer from '../components/Footer'
import DesejosBody from '../components/DesejosBody'
import styles from '../styles/Home.module.css'
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/client'

export default function Home() {
  const [ session, loading ] = useSession()
  return (
    <div className={styles.container}>
      <Head>
        <title>Florê Prata</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />
      </Head>
      <Header />
      <DesejosBody/>
      <Footer />
    </div>
  )
}
