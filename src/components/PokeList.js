import React, { Component } from 'react'
import PokeCard from './PokeCard';
import pokeapi from '../apis/pokeapi';

class PokeList extends Component {
  state = {
    pokemon: null,
    url: 'https://pokeapi.co/api/v2/pokemon/'
  }

  async componentDidMount() {
    const res = await pokeapi.get('/pokemon');

    this.setState({
      pokemon: res.data['results']
    })
  }

  render() {
    const { pokemon } = this.state;
    return (
      <div>
        <h6 className="grey-text">Browse Pokemon</h6>
        {pokemon ? pokemon.map(pokemon => <PokeCard
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
        />) : <h3>Loading...</h3>}
      </div>
    )
  }
}

export default PokeList;