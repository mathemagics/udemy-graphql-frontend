import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class songList extends Component {
  renderSongs() {
    return this.props.data.songs.map( song => {
      return (
        <li key={song.title}>
          {song.title}
        </li>
      )
    })
  }
    render() {
      console.log(this.props);
      return (
        <div>
          {this.props.data.loading ?
            <div>loading...</div> :
            <ul> {this.renderSongs()} </ul>}
        </div>
      );
    }
}

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(songList);
