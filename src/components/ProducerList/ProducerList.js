import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { buyProducer } from '../../js/actions/actions';
import Producer from '../Producer/Producer';

const StyledContainer = styled.div`
  max-height: 100%;
`;

function ProducerList(props) {
  const { arrayOfProducers } = props;
  return (
    <StyledContainer>
      {arrayOfProducers.map(producer => {
        return <Producer id={producer.id} producer={producer} />;
      })}
    </StyledContainer>
  );
}

ProducerList.propTypes = {
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
)(ProducerList);
