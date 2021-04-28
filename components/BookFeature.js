import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/BookFeature.module.scss'

const BookFeature = () => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <h2>The Book, <br />The Legend.</h2>
        <p>Step right up, read all about it – my notebook, in the papery flesh..y paper.</p>
        <Link href="/the-book">
          <a className="button">Let's See</a>
        </Link>
      </div>

      <div className={styles.image}>
        <Image
          src="/sparks-from-the-dark-cover.jpg"
          alt="test"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}
export default BookFeature;