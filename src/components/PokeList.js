import React, { Component } from 'react'
import PokeCard from './PokeCard';
import pokeapi from '../apis/pokeapi';

class PokeList extends Component {
  state = {
    pokemonList: [],
    url: 'https://pokeapi.co/api/v2/pokemon/'
  }

  async componentDidMount() {
    const res = await pokeapi.get('/pokemon/?limit=10');

    this.setState({
      pokemonList: res.data['results']
    })
    console.log(this.state.pokemonList);
  }

  render() {
    const { pokemonList } = this.state;
    const { filteredOptions } = this.props;
    // if searchTerm return filtered PokeList based on inputted searchTerm, otherwise return full PokeList
    return (
      <React.Fragment>
        <h6 className="grey-text">Browse Pokemon</h6>
        {filteredOptions}
        {pokemonList ? pokemonList.map((pokemon) => <PokeCard
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
        />) : <h3>Loading...</h3>}


      </React.Fragment>
    )
  }
}

export default PokeList;