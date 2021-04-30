import Image from 'next/image';
import Layout from '../components/Layout';
import Styles from '../styles/pages/LittleWrits.module.scss'

const TheBook = () => {
  return (
    <Layout>
      <div className="container">
        <div className={Styles.header}>
          <h1>the little words</h1>
        </div>

        <div className={Styles.grid}>
          <aside className={Styles.sidebar}>
            <ul>
              <li><a href="#">Don't let the trust out</a></li>
              <li><a href="#">Don't let the trust out</a></li>
              <li><a href="#">Don't let the trust out</a></li>
              <li><a href="#">Don't let the trust out</a></li>
            </ul>
          </aside>
        
          <div className={Styles.writsList}>
            <div className={Styles.aWrit}>
              <h3>Don't let the trust out</h3>
              <p>A change is baked into the everyday of ways
              that things will never stay the same</p>
              <p>And so we try to stray, but pulled back we become
              I'll twiddle my thumbs a bit while I wait to see what takes place</p>
              <p>The avenue we came down on is not the one we might leave
              but different roads for different folks,
              different roads make different forks,
              and different forks, well, you know.</p>
              <p>The undeniability of the difference
              is that without anything not being the same
              you must understand that someone will eventually need to take the blame.</p>
              <p>And I call not-it.</p>
            </div>

            <div className={Styles.aWrit}>
              <h3>Don't let the trust out</h3>
              <p>A change is baked into the everyday of ways
              that things will never stay the same</p>
              <p>And so we try to stray, but pulled back we become
              I'll twiddle my thumbs a bit while I wait to see what takes place</p>
              <p>The avenue we came down on is not the one we might leave
              but different roads for different folks,
              different roads make different forks,
              and different forks, well, you know.</p>
              <p>The undeniability of the difference
              is that without anything not being the same
              you must understand that someone will eventually need to take the blame.</p>
              <p>And I call not-it.</p>
            </div>
          </div>

        </div>
       
      </div>
    </Layout>
  )
}
export default TheBook;