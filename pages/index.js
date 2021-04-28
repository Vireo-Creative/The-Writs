import Layout from '../components/Layout';
import BookFeature from '../components/BookFeature';

const Home = () => {
  return (
    <Layout>
      <div className="container">
      
        <BookFeature 
          title="The Book, The Legend."
          subtitle="Step right up, read all about it – my notebook, in the papery flesh..y paper."
          button="Let's see"
          link="/the-book"
          image="/sparks-from-the-dark-cover.jpg"
        />

        <BookFeature 
          title="The ‘Zine Machine"
          subtitle="Choo Choo the Zine Machine lumbers on, the smoke from its stacks are dumped on paper, a byproduct of a busy mind without an outlet, if anything at all."
          button="Let's see"
          link="/zine"
          image="/choo-choo.jpg"
        />

      </div>
    </Layout>
  )
}
export default Home;