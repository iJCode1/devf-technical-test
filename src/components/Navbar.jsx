import styled from "styled-components";
import menu from "../assets/icons/icon-menu.svg";
import cancel from "../assets/icons/icon-cancel.svg";

const NavbarStyled = styled.nav`
  block-size: 4rem;
  box-sizing: border-box;
  inline-size: 100%;
  padding-inline: 1.375rem;
  position: sticky;
  inset-block-start: 0;
  inset-inline: 0;
  background-color: var(--primary-color);
  z-index: 5;

  .content {
    max-inline-size: 70rem;
    margin: 0 auto;
    block-size: 100%;
  }

  .list {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    block-size: 100%;
    align-items: center;
    list-style: none;

    .link {
      text-decoration: none;
      transition: transform 0.2s;
      color: var(--white);
    }

    .link:active {
      transform: scale(0.9);
    }

    .icon{
      inline-size: 1.5rem;
      block-size: 1.5rem;
      display: inline-block;
      transition: background-image .3s ease-in-out;
      background-image: url(${props => props.navState ? menu : cancel });
    }
  }

  .title {
    text-decoration: none;
    text-transform: uppercase;
  }

  .list2 {
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    inset-inline: 0;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
    padding-block: 2rem;
    display: ${props => props.navState ? "none" : "flex"};
    background-color: var(--primary-color);

    .item{
      transition: transform .2s;
      :active{
        transform: scale(.9);
      }
    }

    .link {
      color: var(--white);
      text-decoration: none;
      text-transform: uppercase;
      :hover{
        text-decoration: underline;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .content {
      display: flex;
      justify-content: space-between;

      .icon {
        display: none;
      }
    }

    .list2 {
      flex-direction: row;
      position: relative;
      padding: 0;
      display: flex;
    }
  }
`;

function Navbar({ navState, setNavState }) {

  const handleClick = () => {
    setNavState(!navState);
  };

  return (
    <NavbarStyled navState={navState}>
      <div className="content">
        <ul className="list">
          <li className="item">
            <a className="link" href="./">
              <h2 className="title">nasa</h2>
            </a>
          </li>
          <li onClick={handleClick}>
            <span className="icon">
            </span>
          </li>
        </ul>

        <ul className="list2" onClick={handleClick}>
          <li className="item">
            <a className="link" href="#apod">
              APOD
            </a>
          </li>
          <li className="item">
            <a className="link" href="#link2">
              link2
            </a>
          </li>
          <li className="item">
            <a className="link" href="#link3">
              link3
            </a>
          </li>
          <li className="item">
            <a className="link" href="#contacto">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </NavbarStyled>
  );
}

export default Navbar;