import React from "react";
import { Card, Icon, Grid, Label } from 'semantic-ui-react';

class PlanetCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid container columns={4}>
      {
        this.props.planetsList.map((planet) => (
          <Grid.Column key={planet.name}>
            <Card color='teal'>
              <Card.Content>
                <Card.Header>{planet.name}</Card.Header>
                <Card.Meta>
                  <span>Diameter: {planet.diameter}</span>
                </Card.Meta>
                <Card.Description>
                  <Label>Gravity</Label>{planet.gravity}<br />
                  <Label>Terrain</Label>{planet.terrain}<br />
                  <Label>climate</Label>{planet.climate}<br />
                  <Label>Surface water</Label>{planet.surface_water}<br />
                  <Label>Orbital period</Label>{planet.orbital_period}<br />
                  <Label>Rotation period</Label>{planet.rotation_period}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name="users" />
                <span>{planet.population}</span>
              </Card.Content>
            </Card>
          </Grid.Column>
        )
        )
      }
    </Grid>        
      </React.Fragment>
    );
  }
}

export default PlanetCard;
