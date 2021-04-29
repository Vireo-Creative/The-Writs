import Link from 'next/link'
import styles from '../styles/components/Footer.module.scss'
import navItems from '../data/nav.js'
import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter();

  return (
    <footer>
      <div className="container">
        <div className={styles.footer}>

          <Link href="/">
            <a className={styles.logo}>The Writs</a>
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
    </footer>
  )
}
export default Footer;