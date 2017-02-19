import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './lyricCreate';
import LyricList from './lyricList';

class SongDetail extends Component {
  render() {
    const { data: {song}, params: {id} } = this.props;
    console.log(song);
    return (
      <div>
        <Link to="/">Back</Link>
      { song && <h3>{song.title}</h3> }
      <LyricList lyrics={song && song.lyrics}/>
      <LyricCreate songId={id}/>
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
