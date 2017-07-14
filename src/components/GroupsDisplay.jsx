import React from 'react';
import '../styles/GroupsDisplay.css';

import { Grid, Row, Col } from 'react-flexbox-grid';

export const GroupsDisplay = (props) => {
  const groups = props.groups,
        colSize = 12 / props.groups.length;
        console.log(groups);

  return (
    <Grid
      className="GroupsDisplay-Container"
      fluid
    >
      {
        !groups.length ? 'GROUP RANDOMIZER' :
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
      }
    </Grid>
  );
};
