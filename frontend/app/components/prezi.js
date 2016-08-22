'use strict';

const
  React = require('react'),
  DeepPureRenderMixin = require('../mixins/deep-pure-render-mixin'),
  { Card, CardTitle, CardText } = require('react-mdl'),
  { PreziPropTypes } = require('./prop-types');

module.exports = React.createClass({
  mixins: [DeepPureRenderMixin],
  propTypes: {...PreziPropTypes},

  getDefaultProps() {
    return {
      id: '',
      title: '',
      thumbnail: '',
      creator: { name: '', profileUrl: '' },
      createdAt: '',
    };
  },

  render() {
    const {
      title,
      thumbnail,
      creator,
      createdAt
    } = this.props;

    return (
      <Card shadow={0} style={{width: '400px', height: '400px', margin: 'auto'}}>
        <CardTitle
            expand
            style={{
              color: '#fff',
              height: '400px',
              background: `url(${thumbnail}) bottom right 15% no-repeat #46B6AC`}
            }>
          {title}
        </CardTitle>
        <CardText>
          {createdAt} by {creator.name}
        </CardText>
      </Card>
    );
  },
});
