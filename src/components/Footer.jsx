import styled from "styled-components";
import SocialFooter from "./SocialFooter";

const FooterStyled = styled.div`
  .footer {
    padding-block: 1.5rem;
    padding-inline: 1.375rem;
  }

  .footer-container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 2rem;
    max-inline-size: 70rem;
    margin: 0 auto;
    block-size: 100%;

    .footer-title {
      color: var(--white);
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  .footer-list {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2.5rem;
    padding: 0;
    margin: 0;
    block-size: 100%;

    .footer-link {
      text-decoration: none;
      color: var(--white);
    }
  }

  @media screen and (min-width: 768px) {
    .footer-container {
      flex-direction: row;
    }
  }
`;

function Footer() {
  return (
    <FooterStyled>
      <footer className="footer">
        <div className="footer-container container">
          <div className="footer-logo">
            <a className="footer-title" href="./">
              nasa
            </a>
          </div>
          <div className="footer-social">
            <ul className="footer-list">
              <li className="footer-item">
                <SocialFooter text="GitHub" link="https://github.com/iJCode1" />
              </li>
              <li className="footer-item">
                <SocialFooter
                  text="Linkedin"
                  link="https://www.linkedin.com/in/joel-dome/"
                />
              </li>
              <li className="footer-item">
                <SocialFooter
                  text="Twitter"
                  link="https://twitter.com/iJCode1"
                />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </FooterStyled>
  );
}

export default Footer;
