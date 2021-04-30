import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Styles from '../styles/components/Navbar.module.scss'
import navItems from '../data/nav.js'


const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={Styles.navbar}>
      <div className={Styles.navbarWrap}>

        <Link href="/">
          <a className={Styles.brand}>
            <h1>The Writs</h1>
            <p>A site forwords,</p>
          </a>
        </Link>

        <div
          className={"burger" + (menuOpen ? " isOpen" : "")}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>

        <nav className={"nav" + (menuOpen ? " isOpen" : "")}>
          {navItems.map(({ slug, name}) => (
            <Link href={slug} key={name}>
              <a className={router.pathname == slug ? "activePage" : ""}>{name}</a>
            </Link>
          ))}
        </nav>

      </div>
    </div>
  )
}
export default Navbar;