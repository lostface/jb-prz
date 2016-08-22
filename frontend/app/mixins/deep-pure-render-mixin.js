'use strict';

const notDeepStrictEqual = require('not_deep_strict_equal');

const DeepPureRenderMixin = {
  shouldComponentUpdate(nextProps, nextState) {
    return notDeepStrictEqual(
      nextProps, this.props) ||
      notDeepStrictEqual(nextState, this.state
    );
  },
};

module.exports = DeepPureRenderMixin;
