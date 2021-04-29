import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/components/Navbar.module.scss'
import navItems from '../data/nav.js'

const Navbar = () => {
  const router = useRouter();
  
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarWrap}>

        <Link href="/">
          <a className={styles.brand}>
            <h1>The Writs</h1>
            <p>A site forwords,</p>
          </a>
        </Link>

        <nav className={styles.nav}>
          {navItems.map(({ slug, name}) => (
            <Link href={slug} key={name}>
              <a className={router.pathname == slug ? styles.active : ""}>{name}</a>
            </Link>
          ))}
        </nav>

      </div>
    </div>
  )
}
export default Navbar;