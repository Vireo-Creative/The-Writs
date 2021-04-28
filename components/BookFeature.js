import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/BookFeature.module.scss'

const BookFeature = (props) => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
        <Link href={props.link}>
          <a className="button">{props.button}</a>
        </Link>
      </div>

      <Link href={props.link}>
        <a className={styles.image}>
          <Image
            src={props.image}
            alt={props.title}
            layout="fill"
            objectFit="cover"
          />
        </a>
      </Link>
      
    </div>
  )
}
export default BookFeature;