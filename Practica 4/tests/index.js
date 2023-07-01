const axios = require('axios');
axios.get('https://gist.githubusercontent.com/keeguon/2310008/raw/bdc2ce1c1e3f28f9cab5b4393c7549f38361be4e/countries.json')
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response.data);
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre será executado
  });