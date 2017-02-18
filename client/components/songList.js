import React, { Component } from 'react';
import gql from 'graphql-tag';

class songList extends Component {
    render() {
      return (
        <div>
          SongList
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

export default songList;
