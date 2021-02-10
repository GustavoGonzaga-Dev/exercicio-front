const axios = require('axios');

function getUserAccount() {
    return axios.get('https://jsonplaceholder.typicode.com/posts');
  }
  
  function getUserPermissions() {
    return axios.get('https://jsonplaceholder.typicode.com/comments');
  }
  
  Promise.all([getUserAccount(), getUserPermissions()])
    .then(function (results) {
      const postagens = results[0];
      const comentarios = results[1];
      
      document.getElementById("printTitle").innerHTML = postagens;
      document.getElementById("printBody").innerHTML = comentarios;
      
    });

/* Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
  .then(function (response) {

    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
     always executed
  })*/

