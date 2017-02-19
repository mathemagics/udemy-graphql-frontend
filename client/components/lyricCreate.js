import React, { Component } from 'react';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
  }
  onSubmit(e) {
    e.preventDefault();
    const { songId } = this.props;
    const { content } = this.state;
    this.props.mutate({ variables: { songId , content } })
    .then(() => { this.setState({ content: '' }) });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a lyric</label>
        <input
          onChange={e => { this.setState({ content: e.target.value }) }}
          value={this.state.content}
        />
      </form>
    )
  }
}

const mutation = gql`
  mutation AddLyric($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      title
      lyrics {
        content
        id
      }
    }
  }
`
export default graphql(mutation)(LyricCreate);
