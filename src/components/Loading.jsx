import styled from "styled-components";
import spinner from "../assets/img/tail-spin.svg";

const LoadingStyled = styled.div`
  position: fixed;
  inset: 0;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 1;
  inline-size: 100vw;
  block-size: 100vh;
  color: var(--white);
  font-size: 1.5rem;

  @media screen and (min-width: 768px){
    font-size: 2rem;
  }
`;

function Loading() {
    return (
      <LoadingStyled>
        <img src={spinner} alt="" width="150" />
        <p className="loading-text">Cargando ...</p>
      </LoadingStyled>
    );
}

export default Loading;
