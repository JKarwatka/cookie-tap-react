import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { buyProducer } from '../../js/actions/actions';
import CookieProducer from '../CookieProducer/CookieProducer';

const StyledContainer = styled.div`
  max-height: 100%;
`;

function CookieProducerList(props) {
  const { arrayOfProducers } = props;
  return (
    <StyledContainer>
      {arrayOfProducers.map(producer => {
        return <CookieProducer producer={producer} />;
      })}
    </StyledContainer>
  );
}

CookieProducerList.propTypes = {
  arrayOfProducers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      baseValue: PropTypes.number,
      cookiesPerSecond: PropTypes.number,
      priceIncrease: PropTypes.number,
      owned: PropTypes.number
    })
  ).isRequired
};
const mapStateToProps = state => {
  return { arrayOfProducers: state.producers };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: (id, quantity) => dispatch(buyProducer(id, quantity))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CookieProducerList);
