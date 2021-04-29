import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout(props) {
  const {children} = props;
  const meta = {
    title: 'The Writs',
    description: 'A site forwords',
  };

  return (
    <div className="page">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
      </Head>
      
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />

    </div>
  );
}