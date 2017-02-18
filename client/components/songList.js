import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class songList extends Component {
  renderSongs() {
    return this.props.data.songs.map( song => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      )
    })
  }
    render() {
      return this.props.data.loading ?
             <div>loading...</div> :
             <ul className="collection"> {this.renderSongs()} </ul>
    }
}

const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

export default graphql(query)(songList);
