import styled from 'styled-components'

const CmeStyled = styled.div`
  max-inline-size: 70rem;
  margin: 0 auto;
  margin-block-end: 1rem;
  block-size: 100%;
  padding-inline: 1.375rem;
  padding-block-start: 7rem;

  .concept{
    margin-block-end: 3rem;
  }

  .title{
    margin: 0;
    text-align: center;
    font: var(--h2);
  }

  .info{
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    .element{
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      padding-block-end: .5rem;
    }

    .link{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .name{
      font-weight: 700;
    }
  }

  .catalog{
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    .title{
      font: var(--h1);
    }
  }
`

function Cme(props) {
  return (
    <CmeStyled id='cme'>
      <div className="concept">
        <h2 className="title">CME - Coronal Mass Ejection</h2>
      </div>
      <div className="info">
        {
          props.data.map((item, index) => {
            return (
              <div className='element' key={index}>
                {item.catalog && <p className='catalog'><span className="name">catalog:</span> {item.catalog}</p>}
                {item.note && <p><span className="name">Note:</span> {item.note}</p>}
                {item.isMostAccurate && <p><span className="name">isMostAccurate:</span> {item.isMostAccurate}</p>}
                {item.latitude && <p><span className="name">latitude:</span> {item.latitude}</p>}
                {item.longitude && <p><span className="name">longitude:</span> {item.longitude}</p>}
                {item.speed && <p><span className="name">speed:</span> {item.speed}</p>}
                {item.associatedCMEID && <p><span className="name">associatedCMEID:</span> {item.associatedCMEID}</p>}
                {item.link && <p className='link'><span className="name">link:</span> {item.link}</p>}
                {item.type && <p><span className="name">type:</span> {item.type}</p>}
              </div>
            )
          })
        }
      </div>
    </CmeStyled>
  )
}

export default Cme
