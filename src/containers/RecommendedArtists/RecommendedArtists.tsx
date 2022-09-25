// import * as React from 'react';
// import { useEffect, useState } from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   FlatList,
//   ActivityIndicator,
//   Image,
// } from 'react-native';

// interface Props {}
// const RecommendedArtists = () => {
//     const [searchTerm, setSearchTerm] = useState("");

import * as React from 'react';
import fetch from 'isomorphic-fetch';

interface IState {
  isLoading: boolean;
  error: null | string;
  data: null | IArtist[];
}

interface IArtist {
  id: string;
  name: string;
  followers: {
    href: null | string;
    total: number;
  };
  country: string;
}

class SpotifyArtists extends React.Component<{}, IState> {
  public state = {
    isLoading: true,
    error: null,
    data: null
  };

  public componentDidMount() {
    fetch('https://api.spotify.com/v1/browse/new-releases?limit=50', {
      headers: {
        'Authorization': 'Bearer BQCf4tIKn4QtfEb4JY36tRb7oJxS0tXJm3WhmC3IQU4t4fCQbEJt_LMggtQuUV0zPxoOZ9rhNf_Eg1V5Mk-IgStg5OJzoYF7Vzl_zMQCsfy8V47ZzRTvZGLE08C6mrJH6VNLU6gk2wwTyTJFLrQfT9ZnSA'
      }
    })
      .then(response => response.json())
      .then(data =>
        this.setState({
          isLoading: false,
          error: null,
          data: data.artists.items
        }));
  }

  public render() {
    const { isLoading, error, data } = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <div>
        {data &&
          data.map(artist => (
            <div key={artist.id}>
              <p>Name: {artist.name}</p>
              <p>
                Followers:{' '}
                {artist.followers.total.toLocaleString('en-US')}
              </p>
              <p>Country: {artist.country}</p>
            </div>
          ))}
      </div>
    );
  }
}

export default SpotifyArtists;