import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

// import { Container } from './styles';

export default class User extends Component {
  constructor() {
    super();
    this.state = {
      stars: [],
    };
  }
  // const { user } = route.params;

  // navigation.setOptions({ title: user.name });

  async componentDidMount() {
    const { navigation, route } = this.props;

    navigation.setOptions({ title: route.params.user.name });

    const response = await api.get(`/users/${route.params.user.login}/starred`);

    this.setState({ stars: response.data });
  }

  render() {
    const { stars } = this.state;
    return <View />;
  }
}

User.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      user: PropTypes.shape({
        name: PropTypes.string,
        login: PropTypes.string,
      }),
    }),
  }).isRequired,
};
