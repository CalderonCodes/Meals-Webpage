import Link from 'next/link'
import React from 'react'
import Logo from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from 'next/image'

import MainHeaderBackground from './main-header-background';

function MainHeader() {
  return (
    <>
    <MainHeaderBackground/>
    <header className={classes.header}>
        <Link className={classes.logo} href='/'>
            <Image src={Logo} alt='A plat with food' priority/>
            NextLevel Food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href="/meals">Browser Meals</Link>
                </li>                
                <li>
                    <Link href="/community">community</Link>
                </li>
            </ul>
        </nav>
    </header>
    </>
    
  )
}

export default MainHeader