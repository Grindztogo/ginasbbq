import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Section from "../components/globals/section/Section"
import imgIndex from "../images/bg/ginas-bbq-restaurant.jpg"
import Intro from "../components/Intro"
import styled from "styled-components"

const CateringMenu = () => (
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
        <Banner title="Catering"></Banner>
      </Section>
    </HeaderIndex>
    <Section id="menu" style={{ margin: "4rem auto" }}>
      <MenuWrapper>
        <Intro
          heading="Set Menus"
          subheading="We offer variety of choices to make your mouth and budget happy. Whether you order on per person basis, or order  a la carte (medium pan), we guarantee satisfaction, both in your mouth and in your wallet! To order, please call us at (808) 735-7964 or Fax us at (808) 739-0887. Prices are subject to change without notice."
        />
        <div className="container">
          <div>
            <h4>SET A $9.50/PERSON</h4>
            <ul>
              <li>Kalbi</li>
              <li>BBQ Beef</li>
              <li>BBQ Chicken</li>
              <li>Meat Jun</li>
              <li>Veggie Spring Roll</li>
              <li>Bibim Kooksoo</li>
              <li>Rice</li>
              <li>Assorted Veggies</li>
            </ul>
          </div>
          <div>
            <h4>SET B $10.00/PERSON</h4>
            <ul>
              <li>Kalbi</li>
              <li>BBQ Beef</li>
              <li>BBQ Chicken</li>
              <li>Meat Jun</li>
              <li>Chicken Wings</li>
              <li>Veggie Spring Roll</li>
              <li>Rice</li>
              <li>Assorted Veggies</li>
            </ul>
          </div>
          <div>
            <h4>SET C $10.50/PERSON</h4>
            <ul>
              <li>Kalbi</li>
              <li>BBQ Beef</li>
              <li>BBQ Chicken</li>
              <li>Meat Jun</li>
              <li>Chicken Wings</li>
              <li>Chicken Katsu</li>
              <li>Veggie Spring Roll</li>
              <li>Bibim Kooksoo</li>
              <li>Rice</li>
              <li>Assorted Veggies</li>
            </ul>
          </div>
          <div>
            <h4>SET D $11.00/PERSON</h4>
            <ul>
              <li>Kalbi</li>
              <li>BBQ Beef</li>
              <li>BBQ Chicken</li>
              <li>Meat Jun</li>
              <li>Chicken Wings</li>
              <li>Chicken Katsu</li>
              <li>Long Rice</li>
              <li>Veggie Spring Roll</li>
              <li>Bibim Kooksoo</li>
              <li>Rice</li>
              <li>Assorted Veggies</li>
            </ul>
          </div>
          <div>
            <h4>SET E $12.00/PERSON</h4>
            <ul>
              <li>Kalbi</li>
              <li>BBQ Beef</li>
              <li>BBQ Chicken</li>
              <li>Meat Jun</li>
              <li>Fish Jun</li>
              <li>Chicken Wings</li>
              <li>Chicken Katsu</li>
              <li>Long Rice</li>
              <li>Veggie Spring Roll</li>
              <li>Bibim Kooksoo</li>
              <li>Rice</li>
              <li>Assorted Veggies</li>
            </ul>
          </div>
          <div>
            <h4>SET F $14.50/PERSON</h4>
            <ul>
              <li>Kalbi</li>
              <li>BBQ Chicken</li>
              <li>Meat Jun</li>
              <li>Fish Jun</li>
              <li>Chicken Wings</li>
              <li>Chicken Katsu</li>
              <li>Shrimp Tempura</li>
              <li>Spicy Pork</li>
              <li>Long Rice</li>
              <li>Veggie Spring Roll</li>
              <li>Bibim Kooksoo</li>
              <li>Rice</li>
              <li>Assorted Veggies</li>
            </ul>
          </div>
        </div>
        <br />
        <Intro
          heading="Party Pans"
          subheading="We offer variety of choices to make your mouth and budget happy. Whether you order on per person basis, or order  a la carte (medium pan), we guarantee satisfaction, both in your mouth and in your wallet! To order, please call us at (808) 735-7964 or Fax us at (808) 739-0887. Prices are subject to change without notice."
        />
        <div className="container">
          <div>
            <h4>Meat Jun</h4>
            <ul>
              <li>Small: $30.00</li>
              <li>Medium: $47.00</li>
              <li>Large: $90.00</li>
            </ul>
          </div>
          <div>
            <h4>Long Rice</h4>
            <ul>
              <li>Small: $30.00</li>
              <li>Medium: $40.00</li>
              <li>Large: $75.00</li>
            </ul>
          </div>
          <div>
            <h4>Fish Jun</h4>
            <ul>
              <li>Small: $33.00</li>
              <li>Medium: $50.00</li>
              <li>Large: $100.00</li>
            </ul>
          </div>
          <div>
            <h4>Bibim Kooksoo</h4>
            <ul>
              <li>Small: $30.00</li>
              <li>Medium: $40.00</li>
              <li>Large: $75.00</li>
            </ul>
          </div>
          <div>
            <h4>Chicken Katsu</h4>
            <ul>
              <li>Small: $30.00</li>
              <li>Medium: $47.00</li>
              <li>Large: $90.00</li>
            </ul>
          </div>
          <div>
            <h4>Assorted Veggies</h4>
            <ul>
              <li>Small: $30.00</li>
              <li>Medium: $40.00</li>
              <li>Large: $75.00</li>
            </ul>
          </div>
          <div>
            <h4>Assorted Veggies</h4>
            <ul>
              <li>Small: $33.00 w/ Daegu</li>
              <li>Medium: $45.00 w/ Daegu</li>
              <li>Large: $85.00 w/ Daegu</li>
            </ul>
          </div>
          <div>
            <h4>Rice</h4>
            <ul>
              <li>Small: $8.00</li>
              <li>Medium: $10.00</li>
              <li>Large: $20.00</li>
            </ul>
          </div>
          <div>
            <h4>Garlic Chicken</h4>
            <ul>
              <li>Small: $30.00</li>
              <li>Medium: $44.00</li>
              <li>Large: $88.00</li>
            </ul>
          </div>
          <div>
            <h4>Hot Fried Chicken Wings</h4>
            <ul>
              <li>Small: $30.00</li>
              <li>Medium: $44.00</li>
              <li>Large: $88.00</li>
            </ul>
          </div>
          <div>
            <h4>Pork Katsu</h4>
            <ul>
              <li>Small: $33.00</li>
              <li>Medium: $50.00</li>
              <li>Large: $100.00</li>
            </ul>
          </div>
          <div>
            <h4>Mandoo</h4>
            <ul>
              <li>Small: $30.00</li>
              <li>Medium: $47.00</li>
              <li>Large: $90.00</li>
            </ul>
          </div>
          <div>
            <h4>Squash Jun</h4>
            <ul>
              <li>Small: $30.00</li>
              <li>Medium: $47.00</li>
              <li>Large: $90.00</li>
            </ul>
          </div>
          <div>
            <h4>Shrimp Tempura</h4>
            <ul>
              <li>Small: $34.00</li>
              <li>Medium: $55.00</li>
              <li>Large: $105.00</li>
            </ul>
          </div>
          <div>
            <h4>Deep Fried Oyster</h4>
            <ul>
              <li>Small: $34.00</li>
              <li>Medium: $55.00</li>
              <li>Large: $105.00</li>
            </ul>
          </div>
          <div>
            <h4>Potato Croquette</h4>
            <ul>
              <li>Small: $34.00</li>
              <li>Medium: $55.00</li>
              <li>Large: $105.00</li>
            </ul>
          </div>
          <div>
            <h4>Spicy Pork</h4>
            <ul>
              <li>Small: $34.00</li>
              <li>Medium: $55.50</li>
              <li>Large: $105.00</li>
            </ul>
          </div>
          <div>
            <h4>BBQ Spicy Ika</h4>
            <ul>
              <li>Small: $36.00</li>
              <li>Medium: $58.00</li>
              <li>Large: $105.00</li>
            </ul>
          </div>
          <div>
            <h4>Fried Rice</h4>
            <ul>
              <li>Small: $30.00 | KimChee FR $30.00</li>
              <li>Medium: $40.00 | KimChee FR $40.00</li>
              <li>Large: $75.00 | KimChee FR $75.00</li>
            </ul>
          </div>
        </div>
        <br />
        <Intro
          heading="Meat Lover's Special BBQ"
          subheading="For your backyard party, tailgate party or for your picnic, we have marinated meats just for these occasions! To order, please call us at (808) 735-7964 or Fax us at (808) 739-0887. Prices are subject to change without notice."
        />
        <div className="container">
          <div>
            <h4>Kalbi (Marinated)</h4>
            <ul>
              <li>Small (3lbs): $38.00</li>
              <li>Medium (5lbs): $58.50</li>
              <li>Large (10lbs): $115.00</li>
            </ul>
          </div>
          <div>
            <h4>BBQ Beef (Marinated)</h4>
            <ul>
              <li>Small (3lbs): $33.00</li>
              <li>Medium (5lbs): $50.00</li>
              <li>Large (10lbs): $100.00</li>
            </ul>
          </div>
          <div>
            <h4>BBQ Chicken (Marinated)</h4>
            <ul>
              <li>Small (3lbs): $30.50 | Spicy $33</li>
              <li>Medium (5lbs): $48.50 | Spicy $50</li>
              <li>Large (10lbs): $90.00 | Spicy $100</li>
            </ul>
          </div>
        </div>
      </MenuWrapper>
    </Section>
  </Layout>
)

const MenuWrapper = styled.div`
  .container {
    display: flex;
    flex-wrap: wrap;
    margin: 0rem auto;
  }
  div {
    flex-basis: 33%;
    text-align: center;
  }
  h4 {
    margin: 1rem 0rem 0rem 0rem;
    letter-spacing: 1px;
  }
  ul {
    list-style-type: none;
    li {
      font-size: 0.7rem;
    }
  }
  @media (max-width: 768px) {
    div {
      flex-basis: 50%;
    }
  }
`

export default CateringMenu
