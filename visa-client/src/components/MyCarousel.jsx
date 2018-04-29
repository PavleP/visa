import React, {Component} from 'react';
import {Carousel, Grid} from 'react-bootstrap';

class MyCarousel extends Component {
  render() {
    return (
        <Grid>
          <Carousel>
            <Carousel.Item>
              <img alt="First slide" src="carousel/1.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="Second slide" src="carousel/2.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="Third slide" src="carousel/3.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="Fourth slide" src="carousel/4.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="Fifth slide" src="carousel/5.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="Sixth slide" src="carousel/6.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="Seventh slide" src="carousel/7.jpg" />
            </Carousel.Item>
          </Carousel>
        </Grid>
    )
  }
}

export default MyCarousel;
