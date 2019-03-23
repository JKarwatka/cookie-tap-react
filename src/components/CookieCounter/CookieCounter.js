import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function CookieCounter({ cookieCount }) {
  return <h2>Counter + {cookieCount}</h2>;
}

CookieCounter.propTypes = {
  cookieCount: PropTypes.number.isRequired
};
const mapStateToProps = state => {
  return { cookieCount: state.cookieCount };
};

export default connect(
  mapStateToProps,
  null
)(CookieCounter);
