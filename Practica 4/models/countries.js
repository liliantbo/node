const URL = 'https://gist.githubusercontent.com/keeguon/2310008/raw/bdc2ce1c1e3f28f9cab5b4393c7549f38361be4e/countries.json'

const getCountries = (cb) => {
    const axios = require('axios');
axios.get(URL)
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response.data);
    try {
        return cb(null, response.data)
    }catch (error) {
        console.log('Error try/catch:', error);
        return cb(error);
    }
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
    return cb(error);
  })
}

exports.getCountries = getCountries;