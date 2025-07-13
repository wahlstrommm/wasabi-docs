import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

const FeatureList = [
  {
    title: "Enkel att komma igång",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Vår Docusaurus-baserade dokumentation är byggd för att du snabbt ska kunna komma igång med Shopify-utveckling. Allt är strukturerat med
        färdiga snippets, konventioner och arbetsflöden – så att du kan fokusera på att bygga värde för kunden.
      </>
    ),
  },
  {
    title: "Fokusera på det viktiga",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Slipp onödig repetition. Med modulära snippets, tydliga komponentbeskrivningar och enhetlig struktur behöver du inte uppfinna hjulet för varje
        projekt. Vi har standardiserat allt så att du kan fokusera på lösningar – inte dokumenthantering.{" "}
      </>
    ),
  },
  {
    title: "Bygg vidare med kraften i React & Liquid",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Vill du skräddarsy ett tema eller en sektion? Inga problem. Vi bygger med återanvändbara komponenter, Liquid-snippets och modern
        frontend-logik. Docusaurus fungerar som ett nav där all kod och kunskap är samlad, oavsett om du jobbar med Dawn, Base Theme eller ett
        anpassat Shopify-projekt.
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
        <Heading as="h3">{title}</Heading>
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
