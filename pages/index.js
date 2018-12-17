import Link from 'next/link';
import Layout from '../components/layout';

const Index = () => (
  <Layout>
    <p>Hello Next.js</p>
    <Link as="/bang-gia" href="/price">
      <button>Price</button>
    </Link>
  </Layout>
);

export default Index;
