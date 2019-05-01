import styled from 'styled-components';
import media from '../../themes/media';

export const TYPE_COLORS = {
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

export const BackButton = styled.div`
  grid-column: 1 / -1;
  text-decoration: none;
  color: white;
  margin-top: 1.5em;
  font-size: 18px;

  ${media.xs`
      grid-column: 1 / 2;
      margin: 0;
  `}
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 20vh 50vh;
  grid-gap: 1em;
  min-height: 100vh;
  align-items: center;
  color: white;
  font-size: 20px;

  ${media.xxs`
      grid-template-columns: 1fr;
      grid-template-rows: 12vh 20vh 40vh;
  `}

  ${media.xs`
      grid-template-columns: 1fr;
      grid-template-rows: 12vh 20vh 40vh;
  `}

  ${media.s`
      grid-template-columns: 1fr;
      grid-template-rows: 12vh 20vh 40vh;
  `}

  ${media.l`
      grid-column-gap: 2em;
  `}
`;

export const DetailsContainer = styled.div`
  width: 100%;

  ${media.xxs`
      text-align: center;
      height: 100%;
  `}

  ${media.xs`
      margin-top: 3em;
      text-align: center;
      height: 100%;
  `}

  ${media.s`
      margin-top: 2em;
      text-align: center;
      height: 100%;
  `}

  ${media.m`
      height: 100%;
      width: 60vw;
  `}
`;


export const BasicDetails = styled.div`
  line-height: 1;
  margin-bottom: 0.5em;
`;

export const Id = styled.div`
  font-size: 1.5em; 

  ${media.xxs`
      font-size: 1em;
  `}

  ${media.xs`
      font-size: 1.2em;
  `}
`;

export const Name = styled.div`
  font-size: 3em;

  ${media.xxs`
      font-size: 1.5em;
  `}

  ${media.xs`
      font-size: 1.7em;
  `}

  ${media.s`
      font-size: 2.3em;
  `}

  ${media.m`
      font-size: 2em;
  `}
`;

export const Pokeball = styled.img`
  width: .8em;
  height: .8em;
  margin-right: 5px;
`;

export const TypeBadge = styled.div`
  border-radius: 25px;
  display: inline;
  margin-right: 10px;
  border: 1px solid transparent;
  width: 5em;
  color: white;
  font-weight: bold; 
  padding: 3px 10px 7px 10px;

  ${media.xs`
      width: 2em;
      margin: 0 5px;
  `}
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1em;
  padding: 30px;
  border: solid 1px black;
  border-radius: 15px;
  background-color: #3C3C3C;
  color: #eaeaea;
  font-size: 0.9em;
  width: 45vw;
  height: 100%;

  ${media.xxs`
      width: 90vw;
      height: 80%;
      font-size: 0.64em;
  `}

  ${media.xs`
      width: 90vw;
      height: 80%;
      font-size: 0.65em;
  `}

  ${media.s`
      margin-top: 2em;
      width: 90vw;
      height: 70%;
      font-size: 0.7em;
  `}

  ${media.m`
      font-size: 0.9em;
      width: 60vw;
      height: 80%;
  `}

  ${media.l`
      font-size: 0.9em;
      width: 60vw;
  `}
`;


