import styled from 'styled-components'

const ApodStyled = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  max-inline-size: 70rem;
  margin: 0 auto;
  margin-block-end: 2rem;
  padding-block-start: 4rem;
  block-size: 100%;
  padding-inline: 1.375rem;

  .concept{
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
  }

  .title{
    margin: 0;
    text-align: center;
    font: var(--h2);
  }

  .info{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .subtitle{
    margin: 0;
    font: var(--h3);
  }

  .paragraph{
    margin: 0;
    text-align: justify;
  }

  .img{
    inline-size: 100%;
    max-inline-size: 28.125rem;
    object-fit: cover;
  }

  .date{
    margin: 0;
    font-weight: 400;

    span{
      font-weight: 700;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;

    .img{
      min-inline-size: 16rem;
    }

    .title{
      font: var(--h1);
    }

    .subtitle{
      font: var(--h2);
      font-weight: 400;
    }
  }

  @media screen and (min-width: 1024px) {
    .img{
      min-inline-size: 20rem;
    }
  }
`

function Apod(props) {

  const {title, date, explanation, hdurl} = props.data;

  return (
    <ApodStyled id='apod'>
      <div className="concept">
        <h2 className="title">APOD - {title}</h2>
        <img className='img' src={hdurl} alt={title} />
      </div>
      <div className="info">
        <h3 className='subtitle'>Explanation:</h3>
        <p className='paragraph'>{explanation}</p>
        <h4 className='date'>Date: <span>{date}</span></h4>
      </div>
    </ApodStyled>
  )
}

export default Apod
