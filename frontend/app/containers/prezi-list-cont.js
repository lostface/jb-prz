'use strict';

const
  React = require('react'),
  { connect } = require('react-redux'),
  { PreziArrPropType } = require('../components/prop-types'),
  PreziList = require('../components/prezi-list');

module.exports = connect(mapStateToProps)(PreziListCont);

function PreziListCont(props) {
  return <PreziList {...props}/>;
}

PreziListCont.propTypes = {
  prezis: PreziArrPropType,
};

PreziListCont.defaultProps = {
  prezis: [],
};

function mapStateToProps(state) {
  // TODO _.pick like func
  const { prezis } = state;
  return { prezis };
}
