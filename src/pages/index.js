import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Leaving School Wiki"
      description="A reference for everything we cover on the course">
      <main style={{padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto'}}>
        <Heading as="h1">Leaving School Wiki</Heading>
        <p style={{fontSize: '1.2rem', color: 'var(--ifm-color-emphasis-700)'}}>
          Welcome — use the search or browse the sidebar to look up anything from the course.
        </p>
        <p>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Browse the Reference
          </Link>
        </p>
      </main>
    </Layout>
  );
}
