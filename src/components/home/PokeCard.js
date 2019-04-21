import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import '../../assets/Spinner.css';

const Sprite = styled.img`
  width: 9em;
  height: 9em;
  display: none;
`;
const Card = styled.div`
  border: solid 1px black;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.11), 0 1px 2px rgba(0, 0, 0, 0.22);
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.15);
  }
  user-select: none;
`;
const CardList = styled.div`
  margin-top: 1em;
`;

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
              <div class="triple-spinner"></div>
            ) : null}
            <Sprite
              src={image}
              alt={`${name}'s sprite`}
              className="card-image"
              onLoad={() => this.setState({ imageLoading: false })}
              style={imageLoading ? null : { display: 'inline-block' }}
            />

            <div className="card-content grey darken-1 white-text" style={{ padding: '2px', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
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