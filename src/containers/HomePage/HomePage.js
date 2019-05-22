import React from 'react';
import Greeting from '../../components/Greeting/Greeting';
import { connect } from 'react-redux';

// Fonctionnal Component
const HomePage = ({message}) => (<Greeting message={message} />);

const mapStateToProps = (state) => ({
  "message": state.greetingReducer.message
})

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
