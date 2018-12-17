import Link from 'next/link';
import Layout from '../components/layout';
import MainSearch from '../components/homepage/main-search';
import ServiceMainPage from '../components/homepage/services';
import Project from '../components/homepage/projects';
import ClientsMainPage from '../components/homepage/clients';

const Index = () => (
  <Layout>
    <MainSearch />
    <ServiceMainPage />
    <Project />
    <ClientsMainPage />
    {/* <p>Hello Next.js</p>
    <Link as="/bang-gia" href="/price">
      <button>Price</button>
    </Link> */}
  </Layout>
);

export default Index;
