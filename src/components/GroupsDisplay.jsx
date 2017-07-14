import React from 'react';
import '../styles/GroupsDisplay.css';

import { Grid, Row, Col } from 'react-flexbox-grid';

export const GroupsDisplay = (props) => {
  return (
    <Grid
      className="GroupsDisplay-Container"
      fluid
    >
      <Row>
        <Col xs={12} sm={4} md={3}>
          <div className="GroupsDisplay-NameBox">
            A
          </div>
        </Col>
        <Col xs={12} sm={4} md={3}>
          <div className="GroupsDisplay-NameBox">
            B
          </div>
        </Col>
        <Col xs={12} sm={4} md={3}>
          <div className="GroupsDisplay-NameBox">
            C
          </div>
        </Col>
        <Col xs={12} sm={4} md={3}>
          <div className="GroupsDisplay-NameBox">
            D
          </div>
        </Col>
      </Row>
    </Grid>
  )
}
