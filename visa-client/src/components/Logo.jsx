import React, {Component} from 'react';
import {Grid, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Logo extends Component {
  render() {
    return (
        <Grid>
          <Link to="/">
            <Image src="logo/logo.png"/>
          </Link>
        </Grid>
    );
  }
}

export default Logo;
