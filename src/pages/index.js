import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.themeConfig.role}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://s3.amazonaws.com/attachments.angel.co/8387774-82ac4e62e6d1f900022b351d240f8e5d.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJS6W3HGZGRJIRBTA%2F20230428%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230428T072633Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=521451ab2e7f25202afeaf152f4ed586c43a740ef6b6d216667bf5d1b66fe66d"
          >
            View Resume
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
