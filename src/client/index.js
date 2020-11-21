import alimentos from '../data/alimentos';

class FoodClient {
  
  constructor() {
    this.urlApi =  process.env.REACT_APP_API_URL;
     
  }

  onError = error => {}

  async getFoods () {
    var options = { method: 'GET' };

    // const params = ''; // new URLSearchParams({ q: q, type: 'artist', limit: 10 })
    const data = await fetch(this.urlApi + "/foods-search", options)
        .then(res => res.json())
        .then(data => {        
        return data        
    })
    .catch(err => {
        throw err
    });
    console.log(data)
    return data;
  }

  async searchFoods (search) {
    const filtered = Object.keys(alimentos)
    .filter(key => key.toUpperCase().includes(search))
    .reduce((obj, key) => {
      obj[key] = alimentos[key];
      return obj;
    }, {});
    return filtered;
  }
}

export default FoodClient