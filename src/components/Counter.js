import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Counter = ({ number }) => (
  <span>{ number }</span>
);

Counter.propTypes = {
  number: PropTypes.number
};

// Connection code

const mapStateToProps = (state, ownProps) => ({
  number: state
    .recipes
    .filter(recipe => recipe.favorite === ownProps.favorite)
    .length
});

export default connect(mapStateToProps)(Counter);