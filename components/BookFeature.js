import Link from 'next/link'
import Image from 'next/image'
import Styles from '../styles/components/BookFeature.module.scss'

const BookFeature = (props) => {
  return (
    <div className={Styles.section}>
      <div className={Styles.content}>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
        <Link href={props.link}>
          <a className="button">{props.button}</a>
        </Link>
      </div>

      <Link href={props.link}>
        <a className={Styles.image}>
          <Image
            src={props.image}
            alt={props.title}
            height="1612px"
            width="1080px"
          />
        </a>
      </Link>
      
    </div>
  )
}
export default BookFeature;