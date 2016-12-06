var axios = require('axios');

const API_KEY = '<api_key_here>',
      BASE_URL = `http://api.example-base-url?appid=${API_KEY}&`;

module.exports = {
  makeAPICall: function(arg) {
    let encodedAPICallData = encodeURIComponent(arg),
        requestUrl = `${BASE_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then (function(res) {
      if (res.object.data && res.object.other_data) {
        throw new Error(res.object.other_data)
      }
      return res.object.data.data;
    },
    function(err) {
      throw new Error('Unable to find data for this query.');
    });
  }
};
