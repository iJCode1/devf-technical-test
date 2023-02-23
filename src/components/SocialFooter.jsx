import styled from "styled-components";

const SocialFooterStyled = styled.a`
  color: var(--white);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  text-decoration: none;
  display: inline-block;

  :hover {
    text-decoration: underline;
  }

  &:active {
    transform: scale(0.9);
  }
`;

function SocialFooter({ text, link }) {
  return (
    <SocialFooterStyled href={link} target="_blank" rel="noreferrer">
      {text}
    </SocialFooterStyled>
  );
}

export default SocialFooter;
