import Link from 'next/link'
import Styles from '../styles/components/Footer.module.scss'
import navItems from '../data/nav.js'
import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter();

  return (
    <footer>
      <div className="container">
        <div className={Styles.footer}>

          <Link href="/">
            <a className={Styles.logo}>The Writs</a>
          </Link>

          <nav className={Styles.nav}>
            {navItems.map(({ slug, name}) => (
              <Link href={slug} key={name}>
                <a className={router.pathname == slug ? "activePage" : ""}>{name}</a>
              </Link>
            ))}
          </nav>

        </div>
      </div>
    </footer>
  )
}
export default Footer;