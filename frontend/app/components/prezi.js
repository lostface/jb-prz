'use strict';

const
  React = require('react'),
  { Card, CardTitle, CardText } = require('react-mdl'),
  { PreziPropTypes } = require('./prop-types'),
  ImmutableRenderMixin = require('react-immutable-render-mixin');

module.exports = React.createClass({
  mixins: [ImmutableRenderMixin],
  propTypes: {...PreziPropTypes },

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
          {createdAt} by {creator.get('name')}
        </CardText>
      </Card>
    );
  },
});
