import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import styles from "../styles/index.module.css";
import Share from "../components/Share";
import useToolsData from "../hooks/useToolsData";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Home = () => {
  const toolsData = useToolsData();
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>PDF Online Tools | Premium PDF Editing Solutions</title>
        <meta
          name="description"
          content="Unlock advanced PDF editing, conversion, and collaboration tools with our premium service. Tailored for professionals and businesses seeking efficiency."
        />
        {/* Additional meta tags and links as needed */}
      </Head>

      <main>
        <header className={`${styles.page_section} ${styles.header} mb-0`}>
          <h1 className={styles.title}>{t("common:page_header_title")}</h1>
          <p className={styles.description}>{t("common:page_header_text")}</p>
        </header>

        {/* Tool Features Section */}
        <section className={`${styles.page_section} mt-0`}>
          <article className={styles.container}>
            <h2 className={styles.section_title}>Explore Our Tools</h2>
            <div className={styles.grid_container}>
              {Object.keys(toolsData).map((key) => (
                <Link
                  key={key}
                  className={styles.grid_item}
                  href={toolsData[key].href}
                  prefetch={false}
                >
                  <div className={styles.grid_content}>
                    <div className={styles.grid_item_icon}>
                      {toolsData[key].icon}
                    </div>
                    <h3 className={styles.grid_item_title}>
                      {toolsData[key].title}
                    </h3>
                    <p className={styles.grid_item_description}>
                      {toolsData[key].description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </article>
        </section>

        {/* Pricing Plan Section */}
        <section className={styles.pricing_section}>
          <h2 className={styles.section_title}>Choose Your Plan</h2>
          <div className={styles.pricing_container}>
            {/* Example Plan */}
            <div className={styles.pricing_plan}>
              <h3>Professional</h3>
              <p className={styles.price}>$9.99/month</p>
              <ul className={styles.features_list}>
                <li>Unlimited PDF edits</li>
                <li>Priority support</li>
                <li>Collaboration features</li>
                <li>Advanced security</li>
              </ul>
              <button className={styles.cta_button}>Get Started</button>
            </div>
            {/* Add more plans as needed */}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials_section}>
          <h2 className={styles.section_title}>Hear From Our Users</h2>
          <div className={styles.testimonials_container}>
            {/* Example Testimonial */}
            <blockquote className={styles.testimonial}>
              <p>
                "This tool has revolutionized the way we manage documents.
                Highly recommend for teams looking for seamless collaboration."
              </p>
              <cite>- Jane Doe, Digital Marketer</cite>
            </blockquote>
            {/* Add more testimonials as needed */}
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.cta_section}>
          <h2>Ready to Elevate Your PDF Game?</h2>
          <p>
            Join the professionals using our premium tools to streamline their
            workflows.
          </p>
          <button className={styles.cta_button}>Sign Up Now</button>
        </section>

        <Share />
      </main>
    </>
  );
};
export default Home;
