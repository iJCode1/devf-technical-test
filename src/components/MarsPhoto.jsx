import styled from 'styled-components'

const MarsPhotoStyled = styled.div`
  margin-block-end: 5rem;

  .mars-photo{
    inline-size: 100%;
    block-size: 70vh;
    display: block;
    background-attachment: fixed;
    background-image: url(${props => props.photo ? props.photo : ""});
    background-size: cover;
    display: flex; 
    align-items: center;
    justify-content: center;
  }

  .mars-id{
    font-size: 3rem;
    color: var(--white);
    margin: 0;
  }

  @media screen and (min-width: 768px){
    .mars-id{
      font-size: 7rem;
    }
  }
`

function MarsPhoto({photo, id} = image) {
  return (
    <MarsPhotoStyled photo={photo}>
      <div className='mars-photo'>
        <h2 className='mars-id'>{id}</h2>
      </div>
    </MarsPhotoStyled>
  )
}

export default MarsPhoto
