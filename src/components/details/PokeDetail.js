import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import pokeapi from '../../apis/pokeapi';
import PokeSprite from 'react-poke-sprites';

import styled from 'styled-components';
import pokeball from '../../assets/pokeball.png';
import './PokeDetail.css';
import '../../assets/Spinner.css';


const TYPE_COLORS = {
  'bug': '#3C984F',
  'dark': '#595979',
  'dragon': '#61CAD9',
  'electric': '#E0E52A',
  'fairy': '#EB1169',
  'fighting': '#EF6038',
  'fire': '#FC4C5A',
  'flying': '#49677D',
  'ghost': '#906790',
  grass: '#26CB4F',
  'ground': '#A9702B',
  'ice': '#D8F0FA',
  'normal': '#CB98A7',
  poison: '#785F97',
  'psychic': '#F81B91',
  'rock': '#8B3E20',
  'steel': '#42BD94',
  'water': '#86A7FB'
};

const TypeBadge = styled.div`
  border-radius: 25px;
  display: inline;
  margin-right: 10px;
  border: 1px solid transparent;
  width: 5em;
`

class PokeDetail extends Component {
  state = {
    name: '',
    pokemonId: '',
    types: [],
    height: '',
    weight: '',
    description: '',
    isLoading: true
  }

  async componentDidMount() {
    const { pokemonName } = this.props.match.params;

    // URLs
    const pokemon_URL = await pokeapi.get(`/pokemon/${pokemonName}`);
    const pokemonSpecies_URL = await pokeapi.get(`/pokemon-species/${pokemonName}`)
    const pokemonData = pokemon_URL.data;
    const pokemonSpeciesData = pokemonSpecies_URL.data;

    // Data
    const name = pokemonData.name
      .toLowerCase()
      .split(' ')
      .map(
        letter => letter.charAt(0).toUpperCase() + letter.substring(1))
      .join('');
    const pokemonId = pokemonData.id;

    const types = pokemonData.types.map(({ type }) => {
      return type.name
    })
    // // decimeters to feet
    const height = Math.round((pokemonData.height * 0.328084 + 0.00001) * 100) / 100;
    const weight = pokemonData.weight;

    let description = '';
    pokemonSpeciesData.flavor_text_entries.some((entry) => {
      if (entry.language.name === 'en') {
        description = entry.flavor_text
        return description.split("\n");
      }
    });

    this.setState({
      name,
      pokemonId,
      types,
      height,
      weight,
      description,
      isLoading: false
    });
  }

  render() {
    const { name, pokemonId, types, height, weight, description, isLoading } = this.state;

    return (
      <Fragment>
        {isLoading
          ?
          <div class="triple-spinner detail-loading"></div>
          : <div className="container detail">
            <div className="button">
              <NavLink to={'/'} style={{ textDecoration: 'none', color: 'white', marginTop: '1.5em', fontSize: '18px' }}
                className="btn-floating btn-large waves-effect waves-light red">
                {`<`}
              </NavLink>
            </div>

            <div className="card-image center-align">
              <PokeSprite
                pokemon={`${name}`}
                className={`${name}-class sprite`}
              />
            </div>

            <div className="card-content left-align">

              <div className="basic-details">
                <div className="id">
                  <span><img src={pokeball} className="icon" /></span>
                  {pokemonId < 10 ? `00${pokemonId}` : pokemonId < 100 ? `0${pokemonId}` : pokemonId}
                </div>

                <div className="name">
                  {name}
                </div>
              </div>

              {types.map(type => (
                <TypeBadge
                  key="type"
                  className="types"
                  style={{ backgroundColor: `${TYPE_COLORS[type]}`, color: 'white', fontWeight: 'bold', padding: '3px 10px 7px 10px' }}>{type}
                </TypeBadge>
              ))}

              <div className="specific-details description">
                {description}
                <hr style={{ borderColor: 'rgb(128, 128, 128, 0.5)' }}></hr>
                <div className="height">
                  {`Height: ${height} ft.  Weight: ${weight} kg.`}
                </div>
              </div>
            </div>
          </div>
        }
      </Fragment>
    )
  }
}

export default PokeDetail;