import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";


const FeatureList = [
  {
    title: 'No pay-as-you-go',
    img: 'img/nopay.svg',
    description: (
      <>
        With Crowd Cloud by cuest.io you run your cloud native workloads on a free infrastructure.
      </>
    ),
  },
  {
    title: 'No private data centres',
    img: 'img/nodatacenters.svg',
    description: (
      <>
        with Crowd Cloud, you don&apos;t need a private data center to run the workloads.
      </>
    ),
  },
  {
    title: 'No upfront invetment',
    img: 'img/noinvest.svg',
    description: (
      <>
        No investment in computre power - re-use what you already own.
      </>
    ),
  },
];

function Feature({img, Svg, title, description}) {
  console.log(useBaseUrl(img))
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img}/>
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
