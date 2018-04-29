import React, {Component} from 'react';
import {Col, Grid} from 'react-bootstrap';
import './Home.css';
import intl from 'react-intl-universal';
import MyCarousel from './MyCarousel';

class Home extends Component {
  render() {
    return (
        <div>
          <MyCarousel/>
          <Grid>
            <Col xs={9} md={9}>
              <br/>
              <br/>
              {intl.getHTML('Tab_Home_Paragraph1')}
              {intl.getHTML('Tab_Home_Paragraph2')}
              {intl.getHTML('Tab_Home_Paragraph3')}
              {intl.getHTML('Tab_Home_Paragraph4')}
              {intl.getHTML('Tab_Home_Paragraph5')}
              {intl.getHTML('Tab_Home_Paragraph6')}
              {intl.getHTML('Tab_Home_Paragraph7')}
              {intl.getHTML('Tab_Home_Paragraph8')}
            </Col>
          </Grid>
        </div>
    );
  }
}

export default Home;
