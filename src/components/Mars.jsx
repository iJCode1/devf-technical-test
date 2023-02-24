import styled from 'styled-components'
import MarsPhoto from './MarsPhoto';

const MarsStyled = styled.div`
  padding-block-start: 5rem;

  .title{
    font: var(--h1);
    text-align: center;
    padding-inline: 1.375rem;

  }

  .photo{
    inline-size: 100%;
    block-size: 70vh;
    object-fit: cover;
    display: block;
    background-attachment: fixed;

  }

`

function Mars(props) {
  return (
    <MarsStyled id='mars'>
      <h2 className='title'>Mars Rover Photos</h2>
      {
        props.data.photos.map((item, index) => {
          return (
            <div key={index}>
              <MarsPhoto photo={item.img_src} id={item.id}/>
            </div>
          )
        })
      }
    </MarsStyled>
  )
}

export default Mars
