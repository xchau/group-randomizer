import React from 'react';
import '../styles/GroupsDisplay.css';

import { Grid, Row, Col } from 'react-flexbox-grid';

export const GroupsDisplay = (props) => {
  const groups = props.groups,
        colSize = 12 / props.groups.length;

  return (
    <Grid
      className="GroupsDisplay-Container"
      fluid
    >
      <Row className="GroupsDisplay-Row">
        {
          groups.map((group, i) => {
            return <Col key={i} xs={12} md={colSize}>
              <div className="GroupsDisplay-NameBox">
                {group.join(', ')}
              </div>
            </Col>
          })
        }
      </Row>
    </Grid>
  )
}
