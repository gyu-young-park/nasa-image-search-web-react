import axios from 'axios';

export function getNasaImage(data = '', filter){
  return axios.get(`https://images-api.nasa.gov/search?q=${data}&&media_type=${filter}`);
}

export function getJSON(data){
  return axios.get(data);
}
