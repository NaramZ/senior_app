import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
} from 'mdbreact';
import SectionContainer from '../components/sectionContainer';
import pubimage from '../assets/pubimage.jpg'

const CarouselPage = () => {
    return (
<SectionContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls
          showIndicators
        //   className='z-depth-1'
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              <MDBView>
                <img
                  className='d-block w-50'
                  src= {pubimage}
                  alt='First slide'
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <MDBView>
                <img
                  className='d-block w-50'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg'
                  alt='Second slide'
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <MDBView>
                <img
                  className='d-block w-50'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg'
                  alt='Third slide'
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </SectionContainer>
    )
}

export default CarouselPage;