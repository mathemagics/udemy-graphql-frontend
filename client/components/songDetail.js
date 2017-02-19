import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;
    return (
      <div>
        <Link to="/">Back</Link>
      { song && <h3>{song.title}</h3> }
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
