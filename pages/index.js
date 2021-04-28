import Layout from '../components/Layout';
import BookFeature from '../components/BookFeature';

const Home = () => {
  return (
    <Layout>
      <div className="container">
        <BookFeature />
        <BookFeature />
      </div>
    </Layout>
  )
}
export default Home;