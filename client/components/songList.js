import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import fetchSongs from '../queries/fetchSongs'

class songList extends Component {
  onSongDelete(id){
    this.props.mutate({
      variables: { id },
      refetchQueries: [{ query: fetchSongs }]
    });
  }
  renderSongs() {
    return this.props.data.songs.map( ({title, id}) => {
      return (
        <li key={id} className="collection-item">
          {title}
          <i className="material-icons right" onClick={() => this.onSongDelete(id)}>
            delete
          </i>
        </li>
      )
    })
  }
    render() {
      return (
        <div>
          {
            this.props.data.loading ?
            <div>loading...</div> :
            <ul className="collection"> {this.renderSongs()} </ul>
          }
          <Link to="/songs/new" className="btn-floating btn-large red right ">
            <i className="material-icons">add</i>
          </Link>
        </div>
      )
    }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`

export default graphql(mutation)(
  graphql(fetchSongs)(songList)
);
