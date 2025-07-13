import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginBottom: "2rem" }}>
          <img src="/img/wasabiweb.svg" alt="Wasabi Web" height="40" />
          <img src="/img/shopify.png" alt="Shopify" height="40" />
        </div>
        <p className="hero__subtitle">En samlad plats för moduler, snippets & riktlinjer för Shopify – från Wasabi Web.</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Kom igång med Shopify-moduler
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Välkommen till ${siteConfig.title}`} description="Shopify-snippets och dokumentation från Wasabi Web">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
