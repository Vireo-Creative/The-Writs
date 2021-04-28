import Image from 'next/image';
import Layout from '../components/Layout';

const TheBook = () => {
  return (
    <Layout>
      <div className="container">
        
        <div className="">
          <div className="">
            <h1>The Book,<br /> The Legend.</h1>
            <p>There were too many words in this old notebook that I enjoyed, and the book would have otherwise sat on the shelf forever, unread.</p>
            <p>So I printed it.</p>
            <p>And I gave it a name.</p>
            <p>But that name was taken,<br />
            so I called it something else.</p>
            <p>It is on amazon, <br />
            or I have copies of it.</p>
              
            <div className="buttons">
              <a href="#/" className="button">Paperback</a>
              <a href="#/" className="button">eBook</a>
            </div>
          </div>

          <Image
            src="/sparks-from-the-dark-cover.jpg"
            alt="Sparks from the dark book cover"
            height="1612px"
            width="1080px"
          />
        </div>

      </div>
    </Layout>
  )
}
export default TheBook;