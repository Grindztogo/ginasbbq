import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import Section from "../components/globals/section/Section"
import imgIndex from "../images/bg/ginas-bbq-restaurant.jpg"
import Gallery from "../components/gallery"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home | Gina's BBQ"
      description="Gina's BBQ is located in Market City Shopping Center. We're a family-owned restaurant serving traditional & Hawaiian-style Korean meats, soups & noodles.`,
      author: `@restaurantmarketinghawaii"
      keywords={[
        `Korean Restaurant`,
        `Hawaii Restaurant`,
        `Hawaii Korean Food`,
        `Korean BBQ Takeout`,
        `Korean BBQ Honolulu`,
      ]}
    />
    <HeaderIndex img={imgIndex} style={{ padding: "4rem 0rem" }}>
      <Section style={{ width: "100vw", alignItems: "center" }}>
        <Banner
          title="Gina's BBQ"
          subtitle="Gina's BBQ is located in Market City Shopping Center. We're a family-owned restaurant serving traditional & Hawaiian-style Korean meats, soups & noodles."
        >
          <a href="https://www.grindztogo.com/single.php/order/restaurant/ginas-bbq/15?takeout=1">
            <Button>ORDER TAKEOUT</Button>
          </a>
        </Banner>
      </Section>
    </HeaderIndex>
    <Section style={{ width: "100vw", marginTop: "0rem" }}>
      <Gallery />
    </Section>
    <Section style={{ width: "100vw", marginTop: "0rem" }}>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.579777707769!2d-157.81703678532963!3d21.288095385858476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006d84a65b2a91%3A0x2e879e9c80031478!2sGina&#39;s%20Barbeque!5e0!3m2!1sen!2sus!4v1594082283327!5m2!1sen!2sus"
        width="100%"
        height="450"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        aria-hidden="false"
      ></iframe>
    </Section>
  </Layout>
)

export default IndexPage
