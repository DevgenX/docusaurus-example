import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Full-stack Developer",
    Svg: require("@site/static/img/undraw_javascript_frameworks_-8-qpc.svg")
      .default,
    description: (
      <>
        As a full-stack developer, I am proficient in both front-end and
        back-end development. With my skills and experience, I am able to build
        robust and scalable web applications that meet the needs of businesses
        and users alike.
      </>
    ),
  },
  {
    title: "DevOps",
    Svg: require("@site/static/img/undraw_cloud_hosting_7xb1.svg").default,
    description: (
      <>
        As an experienced DevOps professional, I've managed complex
        infrastructure and deployments on AWS, Google Cloud, and Azure. I
        specialize in implementing and maintaining CI/CD pipelines to streamline
        software development processes and promote team collaboration.
      </>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/undraw_team_collaboration_re_ow29.svg")
      .default,
    description: (
      <>
        As a team player, I thrive in collaborative environments where every
        team member's input is valued and utilized to achieve our common goals.
        I believe that effective communication, active listening, and mutual
        respect are key components of successful teamwork.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
