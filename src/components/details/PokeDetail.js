import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import pokeapi from '../../apis/pokeapi';
import PokeSprite from 'react-poke-sprites';

import { TYPE_COLORS, BackButton, Container, DetailsContainer, BasicDetails, Id, Name, Pokeball, TypeBadge, Description } from './PokeDetail.style';
import pokeball from '../../assets/pokeball.png';
import './PokeDetail.css';
import '../../assets/Spinner.css';

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
          : <Container className="container">
            <BackButton>
              <NavLink to={'/'} style={{ textDecoration: 'none', color: 'white', marginTop: '1.5em', fontSize: '18px' }}
                className="btn-floating btn-large waves-effect waves-light red">
                {`<`}
              </NavLink>
            </BackButton>

            <div className="card-image center-align">
              <PokeSprite
                pokemon={`${name}`}
                className={`${name}-class sprite`}
                style={{
                  height: '10em',
                  justifySelf: 'center'
                }}
              />
            </div>

            <DetailsContainer className="card-content left-align">
              <BasicDetails>
                <Id>
                  <span><Pokeball src={pokeball} />
                  </span>
                  {pokemonId < 10 ? `00${pokemonId}` : pokemonId < 100 ? `0${pokemonId}` : pokemonId}
                </Id>

                <Name>
                  {name}
                </Name>
              </BasicDetails>

              {types.map(type => (
                <TypeBadge
                  key="type"
                  style={{ backgroundColor: `${TYPE_COLORS[type]}` }}>{type}
                </TypeBadge>
              ))}

              <Description>
                {description}
                <div><hr style={{ borderColor: 'rgb(128, 128, 128, 0.5)' }}></hr></div>
                <div className="height">
                  {`Height: ${height} ft.  Weight: ${weight} kg.`}
                </div>
              </Description>
            </DetailsContainer>
          </Container>
        }
      </Fragment>
    )
  }
}

export default PokeDetail;