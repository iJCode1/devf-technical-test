import styled from 'styled-components'
import Footer from './Footer'

const ContactStyled = styled.div`
  background-color: var(--primary-color);
`

function Contact() {
  return (
    <ContactStyled>
        <Footer />
    </ContactStyled>
  )
}

export default Contact
