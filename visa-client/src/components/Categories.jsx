import React, {Component} from 'react';
import intl from 'react-intl-universal';
import {Col, Grid, Table} from 'react-bootstrap';
import Image from 'react-bootstrap/es/Image';

class Categories extends Component {
  render() {
    return (
        <Grid>
          <br/>
          <br/>
          {intl.getHTML('Tab_Categories_Description')}
          <Col xs={9} md={9}>

            <Table striped condensed hover responsive>
              <thead>
              <tr>
                <th>{intl.get('Tab_Categories_Category_Header')}</th>
                <th>{intl.get('Tab_Categories_Vehicles_Header')}</th>
                <th>{intl.get('Tab_Categories_Condition_Header')}</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{intl.get('Tab_Categories_AM_Category')}</td>
                <td>{intl.get('Tab_Categories_AM_Vehicles')}</td>
                <td>{intl.get('Tab_Categories_AM_Condition')}</td>
              </tr>

              <tr>
                <td>{intl.get('Tab_Categories_A1_Category')}</td>
                <td>{intl.get('Tab_Categories_A1_Vehicles')}</td>
                <td>{intl.get('Tab_Categories_A1_Condition')}</td>
              </tr>

              <tr>
                <td>{intl.get('Tab_Categories_A2_Category')}</td>
                <td>{intl.get('Tab_Categories_A2_Vehicles')}</td>
                <td>{intl.get('Tab_Categories_A2_Condition')}</td>
              </tr>

              <tr>
                <td>{intl.get('Tab_Categories_A_Category')}</td>
                <td>{intl.get('Tab_Categories_A_Vehicles')}</td>
                <td>{intl.get('Tab_Categories_A_Condition')}</td>
              </tr>

              <tr>
                <td>{intl.get('Tab_Categories_B_Category')}</td>
                <td>{intl.get('Tab_Categories_B_Vehicles')}</td>
                <td>{intl.get('Tab_Categories_B_Condition')}</td>
              </tr>

              <tr>
                <td>{intl.get('Tab_Categories_F_Category')}</td>
                <td>{intl.get('Tab_Categories_F_Vehicles')}</td>
                <td>{intl.get('Tab_Categories_F_Condition')}</td>
              </tr>
              </tbody>
            </Table>

            {intl.getHTML('Tab_Categories_Minimum_Classes_Count_Description')}
            <Image src="min-fond/min-fond.gif"/>
            {intl.getHTML('Tab_Categories_Minimum_Classes_Count_Note')}
          </Col>
        </Grid>
    );
  }
}

export default Categories;
