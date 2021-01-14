import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Section from "../components/globals/section/Section"
import ContactForm from "../components/ContactForm"
import Intro from "../components/Intro"
import imgIndex from "../images/bg/ginas-bbq-restaurant.jpg"

const AboutPage = () => (
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
        <Banner title="About Us"></Banner>
      </Section>
    </HeaderIndex>
    <Section id="menu" style={{ margin: "6rem auto" }}>
      <p>
        Established in 1991, Gina's B-B-Q is owned and operated by two sisters,
        Gina Song and Yong Hae Han. Ever since, Gina's has built a loyal
        following of customers from near and far. We do our best to provide
        mouth-watering Korean food, and treat all of our customers as our
        family.
      </p>
      <p>
        We provide generous portions of delicious food at a very reasonable
        price. Our typical plate lunch comes with a main entree, 4 choices of
        side dishes and 3 scoops of rice. This typical plate lunch will easily
        feed more than one person.
      </p>
      <p>
        We also serve a variety of other dishes from cold noodles (Bi Bim Kook
        Soo with or without Kimchee) to piping hot stews and soups which are
        very popular with local people.
      </p>
      <p>
        For your special events big and small, we offer Family Pack which is
        very economical and tasty. The Family pack includes 6 BBQ Kalbi, 6 BBQ
        Chicken, 6 BBQ Beef, 12 Fried Mandoo, 12 Meat Jun, 10 scoops of rice
        with all the vegetables/salads (usually 9 items) and a large drink! The
        Family Pack will easily feed 4-6 adults.
      </p>
      <p>
        If your needs are on a grander scale, we also cater parties, birthday
        celebrations, wedding receptions, tailgates or company picnics. We do
        them all! Just give us a call and we can help you to organize a menu to
        fit your needs. When it comes to food, we will cater to your every need.
      </p>
      <p>
        So if you are hungry, don't feel like cooking, or just want to come see
        what all the buzz is about, come and stop by to get some GINA'S!
      </p>
    </Section>
    <Section id="information" style={{ marginTop: "2rem" }}>
      <Intro heading="how can we help you?" />
      <ContactForm />
    </Section>
  </Layout>
)

export default AboutPage
