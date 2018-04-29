import React, {Component} from 'react';
import intl from 'react-intl-universal';
import {Col, Grid, Table} from 'react-bootstrap';

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
                <th>{intl.get('Tab_Categories_AM_Category')}</th>
                <th>{intl.get('Tab_Categories_AM_Vehicles')}</th>
                <th>{intl.get('Tab_Categories_AM_Condition')}</th>
              </tr>

              <tr>
                <th>{intl.get('Tab_Categories_A1_Category')}</th>
                <th>{intl.get('Tab_Categories_A1_Vehicles')}</th>
                <th>{intl.get('Tab_Categories_A1_Condition')}</th>
              </tr>

              <tr>
                <th>{intl.get('Tab_Categories_A2_Category')}</th>
                <th>{intl.get('Tab_Categories_A2_Vehicles')}</th>
                <th>{intl.get('Tab_Categories_A2_Condition')}</th>
              </tr>

              <tr>
                <th>{intl.get('Tab_Categories_A_Category')}</th>
                <th>{intl.get('Tab_Categories_A_Vehicles')}</th>
                <th>{intl.get('Tab_Categories_A_Condition')}</th>
              </tr>

              <tr>
                <th>{intl.get('Tab_Categories_B_Category')}</th>
                <th>{intl.get('Tab_Categories_B_Vehicles')}</th>
                <th>{intl.get('Tab_Categories_B_Condition')}</th>
              </tr>

              <tr>
                <th>{intl.get('Tab_Categories_F_Category')}</th>
                <th>{intl.get('Tab_Categories_F_Vehicles')}</th>
                <th>{intl.get('Tab_Categories_F_Condition')}</th>
              </tr>
              </tbody>
            </Table>

            {intl.getHTML('Tab_Categories_Minimum_Classes_Count_Description')}
            {intl.getHTML('Tab_Categories_Minimum_Classes_Count_Note')}
          </Col>
        </Grid>
    );
  }
}

export default Categories;
