// https://www.npmjs.com/package/cors-anywhere
// https://cors-anywhere.herokuapp.com/

const CORS_ANYWHERE = 'http://localhost:3001/';

function getUrlAllowCors(url: string) {
  return `${CORS_ANYWHERE}${url}`;
}

export default getUrlAllowCors;
