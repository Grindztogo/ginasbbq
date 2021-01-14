import React, { Component } from "react"
import styled from "styled-components"
import { FaInstagram, FaFacebook } from "react-icons/fa"

class Footer extends Component {
  state = {
    icons: [
      {
        id: 2,
        icon: <FaInstagram className="icon facebook-instagram" />,
        path: "https://www.instagram.com/grindztogohi/",
      },
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://www.facebook.com/grindztogo",
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="box contact">
          <h4>Contact Information</h4>
          <p>
            Market City Shopping Center
            <br />
            2919 Kapiolani Blvd, Honolulu, HI 96826
          </p>
          <p className="phone">(808) 735-7964</p>
          <p>Open Daily 10:00am - 9:00pm</p>
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  background: var(--gray);
  color: var(--white);
  h4 {
    letter-spacing: 1px;
  }
  p,
  .phone {
    font-size: 0.8rem;
  }
  .box {
    flex-basis: 100%;
    padding: 2rem;
    margin: 0rem auto;
    text-align: center;
  }
  .map {
    background: lightgray;
    padding: 0;
  }
  a {
    color: var(--white);
    font-size: 2rem;
    line-height: 6rem;
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    .box {
      flex-basis: 100%;
    }
    .phone {
      font-size: 0.8rem;
    }
  }
`

export default Footer
