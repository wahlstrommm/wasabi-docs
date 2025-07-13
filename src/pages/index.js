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
        <div className={styles.logos}>
          <img src="/img/wasabiweb.se-black.svg" alt="Wasabi Web" className={styles.logo} />
          <img src="/img/Shopify.png" alt="Shopify" className={styles.logo} />
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
