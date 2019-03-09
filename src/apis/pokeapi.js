import axios from 'axios';

const URL = 'https://pokeapi.co/api/v2';

export default axios.create({
  baseURL: URL
});