import React from "react";
import { Button, Form, Segment, Message, Container, Header } from 'semantic-ui-react'

import { connect } from "react-redux";
import { login } from "../actions/actions";

class Login extends React.Component {
  onSubmitForm = (e) => {
    let data = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    this.props.login(data);
  };
  render() {
    return (
      <Container style={{ paddingTop: 250 }}>
        <Header color="olive">Log in to Star Wars plannet zone</Header>
        <Segment position="center">
          <Form onSubmit={this.onSubmitForm}>
            <Form.Input
              icon='user'
              iconPosition='left'
              label='Username'
              name="username"
              placeholder='Username'
            />
            <Form.Input
              icon='lock'
              iconPosition='left'
              label='Password'
              placeholder='Password'
              type='password'
              name="password"

            />
            <Button content='Login' primary />
            {this.props.error ? <Message negative>
              <Message.Header>{this.props.error}</Message.Header>
            </Message> : ''}
          </Form>
        </Segment>
      </Container>

    );
  }
}

const mapStateToProps = (state) => {
  return { error : state.error}
}
export default connect(mapStateToProps, { login })(Login);
