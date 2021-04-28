import Link from 'next/link'
import { useRouter } from "next/router";
import navStyles from '../styles/Navbar.module.scss'

const Navbar = () => {
  const router = useRouter();
  const navItems = [
    {
      name: 'The Book, The Legend.',
      slug: '/the-book'
    },
    {
      name: 'the little words',
      slug: '/little-writs'
    },
    {
      name: 'Blarg',
      slug: '/blarg'
    },
    {
      name: 'zine',
      slug: '/zine'
    }
  ]

  return (
    <div className={navStyles.navbar}>
      <div className={navStyles.navbarWrap}>

        <Link href="/">
          <a className={navStyles.brand}>
            <h1>The Writs</h1>
            <p>A site forwords,</p>
          </a>
        </Link>

        <nav className={navStyles.nav}>
          {navItems.map(({ slug, name}) => (
            <Link href={slug} key={name}>
              <a className={router.pathname == slug ? navStyles.active : ""}>{name}</a>
            </Link>
          ))}
        </nav>

      </div>
    </div>
  )
}
export default Navbar;