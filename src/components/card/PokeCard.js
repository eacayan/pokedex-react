import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import { Card, CardList, Sprite } from './PokeCard.style';
import '../../assets/Spinner.css';

class PokeCard extends Component {
  state = {
    name: '',
    image: '',
    pokemonId: '',
    imageLoading: true
  }

  componentDidMount() {
    const { name, url } = this.props;
    // Pokemon ID numbers located in index 6 after split
    const pokemonId = url.split('/')[6];
    const image = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonId}.png?raw=true`;

    this.setState({
      name,
      image,
    })
  }

  render() {
    const { name, image, imageLoading } = this.state;

    return (
      <CardList className="col s6 m3 l2">
        <NavLink
          to={`pokemon/${name}`}
          style={{ textDecoration: 'none', color: 'black' }}>
          <Card
            className="card center-align grey darken-3"
          >

            {imageLoading ? (
              <div class="triple-spinner" ></div>
            ) : null}
            <Sprite
              src={image}
              alt={`${name}'s sprite`}
              className="card-image"
              onLoad={() => this.setState({ imageLoading: false })}
              style={imageLoading ? null : { display: 'inline-block' }}
            />

            <div className="card-content grey darken-1 white-text"
              style={{ padding: '2px', fontSize: '0.9em', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}
            >
              {name
                .toLowerCase()
                .split(' ')
                .map(
                  letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                .join('')}
            </div>
          </Card>
        </NavLink>
      </CardList>

    );
  }
}

export default PokeCard;