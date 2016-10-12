export default function() {
  this.urlPrefix = 'http://localhost:4500';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api';    // make this `api`, for example, if your API is namespaced
  this.timing = 150;
  this.get('/repositories');
  this.get('/repositories/:id')

}
