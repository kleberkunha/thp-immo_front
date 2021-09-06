import Carousel from 'react-bootstrap/Carousel'

const ApartmentsProfile = () => {
  return (
    <>
    <div className="border">
      <div className="container infoAp-location-price border">
        <div className="row d-flex">
          <div className="row title-plus-location d-block">
            <div className="col-sm">
              Moradia T4 de Luxo
            </div>
            <div className="col-sm">
            Tavira (Santa Maria e Santiago), Tavira, Faro
            </div>
          </div>
          <div className="row d-block top-pricing">
            <div className="col-sm total-price">
              445 000 €
            </div>
            <div className="col-sm price-m2">
              1 738 €/m²
            </div>
          </div>
        </div>
        <div className="container">
        <div className="row d-flex">
          <div className="col-9 carousel-box border">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.nortoncounty.net/wp-content/uploads/2021/05/im-234627.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://medias.residences-immobilier.com/pict/f600x400/2/5/7/6/ext_0_2576638.jpg?t=9685981"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.proprietesparisiennes-sothebysrealty.com/datas/biens/thumbs/995/995_00-2020-10-21-1630.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-3 contact-box border">
            <div className="d-flex">
              <div className="icoimg">
              </div>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      </div>












    </div>




    </>
  )
}

export default ApartmentsProfile;