import React from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';

import { Menu, Icon, Input, Header, Button, Segment } from 'semantic-ui-react'

import PlanetCard from "./PlanetCard";
import { getPlanet } from "../actions/actions";

class Dashboard extends React.Component {
  state = { query: "", plannetsList: [] };

  handleInputChange = event => {
    this.props.getPlanet(event.target.value);
    this.setState({
      query: event.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <Menu attached='top'>
          <Menu.Item position='left'>
            <Input
              icon={<Icon name='search' inverted circular link />}
              placeholder="Search Planets here..."
              size="huge"
              value={this.state.query}
              onChange={this.handleInputChange}
            />
          </Menu.Item>
          <Header color="yellow" textAlign="center">STAR WARS PLANETS INFO</Header>
          <Menu.Item position='right'>
          <NavLink to="/login">
            <Button primary >Logout</Button>
            </NavLink>
          </Menu.Item>
        </Menu>
        {this.props.planetsList !== undefined && this.props.planetsList.length > 0 ? <Segment><PlanetCard planetsList={this.props.planetsList}></PlanetCard></Segment> : ''}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    planetsList: state.results
  }
};
export default connect(
  mapStateToProps,
  { getPlanet }
)(Dashboard);
