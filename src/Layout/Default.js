import Head from 'next/head';
import Header from '../Componets/Header';
import Footer from '../Componets/Footer';

import '../Style/app.scss';

const Default = ({ children }) => {
  return (
    <>
      <Head>
        <title>SSR</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Default;
