import React, { Component } from 'react';
import api from '../api';
import { Button, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link, Route } from 'react-router-dom';

class Favorites extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      favorites: [],
    }
  }

  componentDidMount(props) { 
    api.getFavorites(props)
    .then(favoriteData => {
      this.setState({
        favorites: favoriteData,
      })
    })
  }

  handleFavoriteDeleteClick(id) {
    console.log("handleFavoriteDeleteClick")
    api.deleteFavorite(id)
    .then(_ => {
      let newFavorites= [...this.state.favorites];
      for ( let i = 0; i < this.state.favorites.length; i++) {
        if (newFavorites[i]._id === this.state.favorites[i]._id) {
          newFavorites.splice(i, 1)
        }
      }
    this.setState({
      favorites: newFavorites,
      })
     } )
  }
  
  render() {
      console.log(this.state.favorites)
       let favoriteStations = this.state.favorites
       // .filter(favoriteStations => favorite.name.toUpperCase().includes(this.state.value.toUpperCase()))
    return (
      <div>
        <h2>Pinned Stations</h2>
        <ListGroup>
          {favoriteStations
            .map((f) =>
              <ListGroupItem 
              favoriteId={f._id}>
              <Link to={"/stations/" + f._id}>{f.name}</Link>
              <button
              onClick={_ => this.handleFavoriteDeleteClick(f._id)}>Delete</button>
              </ListGroupItem>)}
        </ListGroup>

      </div>  
    )
  }
}

export default Favorites;